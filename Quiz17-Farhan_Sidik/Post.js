import http from 'k6/http'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'

export const options = {
    vus: 10,
    duration: '3s'
}
export default function() {
    const nama=randomString(7)
    const job=randomString(7)
    const url = 'https://reqres.in/api/users'
    const payload = JSON.stringify({
        name: nama,
        job: job,
    })
    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = http.post(url, payload, params)
    console.log(response.body)
    expect(nama).to.be.a("string");
    expect(job).to.be.a("string");
    expect(response.status, "Valid Code").to.equal(201)
    expect(response).to.have.validJsonBody();
}