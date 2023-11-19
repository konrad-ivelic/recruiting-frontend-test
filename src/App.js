import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Pressable, Animated, Alert, Button} from "react-native";
import './App.css';
import {getData,filterCreditNotes} from "./functionsApp";
import {httpResponse} from "./httpResponse";
import {InvoicesView} from "./invoicesView";
import {CreditNotesView} from "./creditNotesView";

function App() {
  // Select invoice and credit notes
  const [invoice, selectInvoice] = useState("");
  const [creditNote, selectCreditNote] = useState("");
  const [creditNotesArray, setCreditNotes] = useState([]);

  //Show or hide elements
  const [displayCredits, setDisplayCredits] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [displayEmptyMessage, setDisplayEmptyMessage] = useState(false);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);

  getData("recruiting.api.bemmbo.com/invoices/pending");

  return (
      <View
          style={{
            flexDirection: 'column'
          }}>
          <InvoicesView invoice={invoice} selectInvoice={selectInvoice} creditNotesArray={creditNotesArray} setCreditNotes={setCreditNotes} setDisplayButton={setDisplayButton} setDisplayCredits={setDisplayCredits} setDisplayEmptyMessage={setDisplayEmptyMessage} setDisplaySuccessMessage={setDisplaySuccessMessage}/>
          {displayEmptyMessage && <View style={{alignItems: "center", margin: 20}}>
              <Text style={{fontWeight:"bold"}}> No hay notas de crédito asociadas a esta factura </Text>
          </View>}
          {displayCredits && <CreditNotesView displayCredits={displayCredits} creditNotesArray={creditNotesArray} creditNote={creditNote} selectCreditNote={selectCreditNote} setDisplayButton={setDisplayButton}/>}
          {displayButton && <View style={{alignItems: "center"}}>
              <Pressable style={{borderColor: "#7ccef9", borderWidth: 2, padding: 5}} onPress={() => {
                  setDisplaySuccessMessage(true);
                  setDisplayButton(false);
                  setDisplayCredits(false);
              }}> Asignar </Pressable>
          </View>}
          {displaySuccessMessage && <View style={{alignItems: "center", margin: 20}}>
              <Text style={{fontWeight:"bold"}}> Nota de crédito asignada correctamente! </Text>
          </View>}
      </View>
  );
}

export default App;
