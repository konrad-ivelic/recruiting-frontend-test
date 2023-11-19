import {React, useState, useRef}from 'react'
import { View, Text, StyleSheet, Image, Pressable, Animated, Button} from "react-native";

export const CreditNotesView = ({ displayCredits, creditNotesArray, creditNote, selectCreditNote, setDisplayButton}) => {
    return (
        <View style={{
            flexDirection: "column",
            margin: 50,
            alignItems: "center"
        }}>
            <View style={{
                backgroundColor: '#fff',
                flexDirection: "column",
                height: 60,
                width: "120%",
                justifyContent: "center",
                alignItems:"center",
            }}>
                <Text style={{
                    fontWeight: "bold",
                }}>
                    Seleccione una nota de crédito</Text>
            </View>
            {creditNotesArray.map(({id,amount,currency,organization_id,type,reference}) => {
                    return <View style={{
                        flexDirection: "row",
                        margin:5,
                        borderColor: "#7ccef9",
                        width: "87%",
                        height: 35,
                        borderWidth: 2,
                        justifyContent: "space-between",
                    }}>
                        <Pressable style={styles.btnNormal} key={id} onPress={() => {
                            selectCreditNote(id);
                            setDisplayButton(true);
                        }}> o </Pressable>
                        <Text style={{fontWeight: "bold"}}> Invoice: ({organization_id}) </Text>
                        <Text> ${amount} ({currency})</Text>
                        <Text> {reference} </Text>
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