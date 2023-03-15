<template>
  <div class="blood">
    <h1>ONLINE REGISTRATION FORM FOR BLOOD DONORS</h1>
    <table class="table" style="text-align: center;margin: auto; width: 50%;">
      <!-- <thead>
      <tr>
        <th>donorname</th>
        <th>gender</th>
        <th>dob</th>
        <th>bloodgroup</th>
        <th>frequencyofdonor</th>
        <th>lastblooddonationdate</th>
        <th>email</th>
        <th>mobileno</th>
        <th>phoneno</th>
        <th>address</th>
        <th>volunteer</th>
      </tr>
      </thead>-->
      <tbody>
        <!-- <tr v-bind:key="donor.donorid" v-for="donor in donors">
        <td>{{donor.donorname}}</td>
        <td>{{donor.gender}}</td>
        <td>{{donor.dob}}</td>
        <td>{{donor.bloodgroup}}</td>
        <td>{{donor.frequencyofdonor}}</td>
        <td>{{donor.lastblooddonationdate}}</td>
        <td>{{donor.email}}</td>
        <td>{{donor.mobileno}}</td>
        <td>{{donor.phoneno}}</td>
        <td>{{donor.address}}</td>
        <td>{{donor.volunteer}}</td>
        </tr>-->
        <tr>
          <td>Donor Name</td>
          <td>
            <input v-model="donorname" type="text" name="dname" />
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <input v-model="gender" type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input v-model="gender" type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input v-model="gender" type="radio" id="others" name="gender" value="others" />
            <label for="others">Others</label>
          </td>
        </tr>
        <tr>
          <td>Date Of Birth</td>
          <td>
            <input v-model="dob" type="date" name="date" />
          </td>
        </tr>
        <tr>
          <td>Blood Group</td>
          <td>
            <select v-model="bloodgroup" name="blood group">
              <option value="select">select</option>
              <option value="O+">O+</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Frequency Of Donor</td>
          <td>
            <select v-model="frequencyofdonor" name="frequency">
              <option value="Regular donor">Regular donor</option>
              <option value="on need basis">on need basis</option>
              <option value="yet to donate">yet to donate</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Last Blood Donation Date</td>
          <td>
            <input v-model="lastblooddonationdate" type="date" name="bdate" />
          </td>
        </tr>

        <tr>
          <td>Email</td>
          <td>
            <input v-model="email" type="text" name="email" />
          </td>
        </tr>
        <tr>
          <td>Mobile Number</td>
          <td>
            <input v-model="mobileno" type="number" name="mobno" />
          </td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>
            <input v-model="phoneno" type="number" name="phoneno" />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <textarea v-model="address" id="address" name="address" rows="2" cols="20"></textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input v-model="volunteer" type="checkbox" name="check" />I volunteer myself for this donation
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <button style="margin-right:5px;" @click="onRegister">Register</button>
            <button @click="onCancel">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BloodDonation",
  data: function() {
    return {
      donors: [],
      donorId: null,
      donorname: null,
      gender: null,
      dob: null,
      bloodgroup: null,
      frequencyofdonor: null,
      lastblooddonationdate: null,
      email: null,
      mobileno: null,
      phoneno: null,
      address: null,
      volunteer: false,
      isCreate: false
    };
  },
  async mounted() {
    let response = await axios.get("http://127.0.0.1:3000/donors");
    this.donors = response.data;
  },
  methods: {
    onCancel() {
      this.isCreate = false;
      this.donorId = null;
      this.donorname = null;
      this.gender = null;
      this.dob = null;
      this.bloodgroup = null;
      this.frequencyofdonor = null;
      this.lastblooddonationdate = null;
      this.mobileno = null;
      this.email = null;
      this.phoneno = null;
      this.address = null;
      this.volunteer = false;
    },
    async onRegister() {
      let request = {
        donorname: this.donorname,
        gender: this.gender,
        dob: this.dob,
        bloodgroup: this.bloodgroup,
        frequencyofdonor: this.frequencyofdonor,
        lastblooddonationdate: this.lastblooddonationdate,
        email: this.email,
        mobileno: this.mobileno,
        phoneno: this.phoneno,
        address: this.address,
        volunteer: this.volunteer
      };
      console.log(request);
      await axios.post("http://127.0.0.1:3000/donor/create", request);
      this.onCancel();
    }
  }
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>