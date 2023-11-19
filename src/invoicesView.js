import {React, useState, useRef}from 'react'
import { View, Text, StyleSheet, Image, Pressable, Animated} from "react-native";
import {allInvoices,allCreditNotes,filterCreditNotes} from "./functionsApp";

export const InvoicesView = ({ invoice, selectInvoice, creditNotesArray, setCreditNotes, setDisplayCredits, setDisplayButton, setDisplayEmptyMessage, setDisplaySuccessMessage}) => {
    return (
        <View style={{
            flexDirection: "column",
            alignItems: "center"
        }}>
            <View style={{
                backgroundColor: '#fff',
                flexDirection: "column",
                height: 60,
                width: "100%",
                justifyContent: "center",
                alignItems:"center",
            }}>
                <Text style={{
                    fontWeight: "bold",
                }}>
                    Seleccione una factura</Text>
            </View>

            {allInvoices.map(({id,amount,currency,organization_id,type}) => {
                return <View style={{
                    flexDirection: "row",
                    margin:5,
                    borderColor: "#7ccef9",
                    width: "80%",
                    height: 35,
                    borderWidth: 2,
                    justifyContent: "space-between",
                }}>
                    <Pressable style={styles.btnNormal} key={id} onPress={() => {
                        if (filterCreditNotes(allCreditNotes,id).length === 0) {
                            setDisplayCredits(false);
                            setDisplayEmptyMessage(true);
                        }
                        else {
                            selectInvoice(id);
                            setCreditNotes(filterCreditNotes(allCreditNotes,id));
                            setDisplayCredits(true);
                            setDisplayEmptyMessage(false);
                        }
                        setDisplayButton(false);
                        setDisplaySuccessMessage(false);
                    }}> o </Pressable>
                    <Text style={{fontWeight: "bold"}}> Invoice: ({organization_id}) </Text>
                    <Text> ${amount} ({currency})</Text>
                    <Text> Recibida </Text>
                </View>
                }
            )}
        </View>
    )
}

var styles = StyleSheet.create({
    btnNormal: {
        width: "5%",
        margin: 5,
        backgroundColor: "#fff" ,
        alignItems: "center",
        justifyContent: "center"
    },
    btnPress: {
        width: "5%",
        margin: 5,
        backgroundColor: "#7ccef9" ,
        alignItems: "center",
        justifyContent: "center"
    }
});