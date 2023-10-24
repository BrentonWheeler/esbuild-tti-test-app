import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StartupTime } from 'react-native-startup-time';

import * as md from 'react-icons/md'
import * as pi from 'react-icons/pi'
import * as gi from 'react-icons/gi'
import * as ci from 'react-icons/ci'
import * as fa from 'react-icons/fa'
import * as fa6 from 'react-icons/fa6'
import * as io from 'react-icons/io'
import * as io5 from 'react-icons/io5'
import * as ti from 'react-icons/ti'
import * as go from 'react-icons/go'
import * as fi from 'react-icons/fi'
import * as lu from 'react-icons/lu'
import * as wi from 'react-icons/wi'
import * as di from 'react-icons/di'
import * as ai from 'react-icons/ai'
import * as bs from 'react-icons/bs'
import * as ri from 'react-icons/ri'
import * as fc from 'react-icons/fc'
import * as gr from 'react-icons/gr'
import * as hi from 'react-icons/hi'
import * as hi2 from 'react-icons/hi2'
import * as si from 'react-icons/si'
import * as sl from 'react-icons/sl'
import * as bi from 'react-icons/bi'
import * as cg from 'react-icons/cg'
import * as vsc from 'react-icons/vsc'
import * as tb from 'react-icons/tb'
import * as tfi from 'react-icons/tfi'
import * as rx from 'react-icons/rx'
import * as lia from 'react-icons/lia'


export default function App() {
  // NOTE: These console.log's are just "using" the packages so they can't be trivally removed by metro without esbuild's treeshaking
  console.log(md);
  console.log(pi);
  console.log(gi);
  console.log(ci);
  console.log(fa);
  console.log(fa6);
  console.log(io);
  console.log(io5);
  console.log(ti);
  console.log(go);
  console.log(fi);
  console.log(lu);
  console.log(wi);
  console.log(di);
  console.log(ai);
  console.log(bs);
  console.log(ri);
  console.log(fc);
  console.log(gr);
  console.log(hi);
  console.log(hi2);
  console.log(si);
  console.log(sl);
  console.log(bi);
  console.log(cg);
  console.log(vsc);
  console.log(tb);
  console.log(tfi);
  console.log(rx);
  console.log(lia);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StartupTime
        style={{position: 'relative'}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
