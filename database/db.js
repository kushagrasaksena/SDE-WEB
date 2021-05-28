import Localbase from "localbase";
import data from "450final.json"
import { getHeapCodeStatistics } from "node:v8";
let db = new Localbase('db');

addData = (callback) => {
    data.forEach(element => {
        db.collection("450dsaArchive").add(topic, topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase());
    });
    getHeapCodeStatistics(callback);
}

getData = (callback) => {
    db.collection('450dsaArchive').get().then((data) =>{
        console.log(data);
        if(data.length === 0)
        {
            addData(callback);
        }
        else
        {
            return data;
        }
    })
}

getTopicData = (key,callback) => {
    db.collection('450dsaArchive').doc(key).get().then((data) => {
        callback(data);
    })
}

updataData = (key,newData) => {
    db.collection('450dsaArchive').doc(key).update(newData);
}

export {addData , getData, getTopicData, updataData};




