import { View, Text, StyleSheet } from 'react-native'
import * as SystemUI from 'expo-system-ui'
import React, { useState } from 'react'
import { Tabs } from 'expo-router'
const _layout = () => {
  return (
   <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Reports",
                fill: "#00ff00",
                headerShown: false,
                width: 377,
                height: 441,
                flexShrink: 0,

            }}
/>
<Tabs.Screen
            name="alerts"
            options={{
                title: "Alerts"
            }}
/>
   </Tabs>
  )
}


export default _layout