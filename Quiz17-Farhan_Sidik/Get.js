import {check} from 'k6'
import http from 'k6/http' 
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

export const options = {
    vus: 10,
    duration: '3s'
}

export default function() {

    let response = http.get('https://reqres.in/api/unknown')
    const nama = response.json()['data']['0']['name']
    const tahun = response.json()['data']['0']['year']
    const color = response.json()['data']['0']['color']
    const nilai_pantone = response.json()['data']['0']['pantone_value']

    expect(nama, "Assertion Name").to.equal('cerulean')
    expect(tahun, "Assertion Year").to.equal(2000)
    expect(color, "Assertion Color").to.equal('#98B2D1')
    expect(nilai_pantone, "Assertion Pantone").to.equal('15-4020')

    console.log(response.body)
    expect(response.status, "Assetion Status").to.equal(200)
}