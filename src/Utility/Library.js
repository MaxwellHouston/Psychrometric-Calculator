/*converters*/

const fToC = (tempF) => {
    let tempC = (tempF-32)*(5/9);
    return tempC;
}

const cToF = (tempC) => {
    let tempF = (tempC*(9/5))+32;
    return tempF;
}


const Library = {

    findRH(T,Td,tempStyle) {
    if(tempStyle === 'fahrenheit'){
        T = fToC(T);
        Td = fToC(Td);
    }
    let RH = 100 * (Math.exp((17.625*Td)/(243.04+Td))/Math.exp((17.625*T)/(243.04+T)));
    return RH.toPrecision(3);
    },

    findDP(RH,T,tempStyle) {
        if(tempStyle === 'fahrenheit'){
            T = fToC(T);
            let Tp = 243.04*(Math.log(RH/100)+((17.625*T)/(243.04+T)))/(17.625-Math.log(RH/100)-((17.625*T)/(243.04+T)));
            return cToF(Tp).toPrecision(3);
        }
        else{
            let Tp = 243.04*(Math.log(RH/100)+((17.625*T)/(243.04+T)))/(17.625-Math.log(RH/100)-((17.625*T)/(243.04+T)));
            return Tp.toPrecision(3)
        }
    },    

    findTemp(RH,Td,tempStyle) {
        if(tempStyle === 'fahrenheit'){
            Td = fToC(Td);
            let T = 243.04*(((17.625*Td)/(243.04+Td))-Math.log(RH/100))/(17.625+Math.log(RH/100)-((17.625*Td)/(243.04+Td)));
            return cToF(T).toPrecision(3);
        }
        else{
            let T = 243.04*(((17.625*Td)/(243.04+Td))-Math.log(RH/100))/(17.625+Math.log(RH/100)-((17.625*Td)/(243.04+Td)));
            return T.toPrecision(3);
        }
    }
}


export default Library;