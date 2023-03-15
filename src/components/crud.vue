<template>
  <div class="about">
    <div v-if="!isCreate" style="width:100%;">
      <h1>Student Details</h1>
      <button @click="onAdd" type="button" style="padding: 5px; margin: 5px;">Add</button>
      <table class="table" style="text-align: center;margin: auto; width: 50%;">
        <thead>
          <tr>
            <!-- <th>Student Details Id</th> -->
            <th>Student Name</th>
            <th>Branch</th>
            <th>Gender</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="student.studentdetailsid" v-for="student in students">
            <!-- <td>{{student.studentdetailsid}}</td> -->
            <td>{{student.studentname}}</td>
            <td>{{student.branch}}</td>
            <td>{{student.gender}}</td>
            <td>
              <button @click="onEdit(student)" type="button">Edit</button>
            </td>
            <td>
              <button @click="onDelete(student.studentdetailsid)" type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else style="width:100%;">
      <h1>Create/update Student Details</h1>
      <table class="table" style="text-align: center;margin: auto; width: 50%;">
        <tbody>
          <tr>
            <td>Student Name</td>
            <td>
              <input v-model="name" />
            </td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>
              <input v-model="branch" />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <select v-model="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button @click="onSave" style="margin-right:5px;">Save</button>
              <button @click="onCancel">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "crud",
  data: function() {
    return {
      students: [],
      name: null,
      branch: null,
      gender: null,
      studentId: null,
      isCreate: false
    };
  },
  async mounted() {
    let response = await axios.get("http://127.0.0.1:3000/students");
    this.students = response.data;
  },
  methods: {
    onAdd() {
      this.isCreate = true;
    },
    onCancel() {
      this.isCreate = false;
      this.name = null;
      this.branch = null;
      this.gender = null;
      this.studentId = null;
    },
    async onSave() {
      if (!this.studentId) {
        let request = {
          studentname: this.name,
          branch: this.branch,
          gender: this.gender
        };
        await axios.post("http://127.0.0.1:3000/student/create", request);
      } else {
        let request = {
          studentname: this.name,
          branch: this.branch,
          gender: this.gender
        };
        await axios.put(
          "http://127.0.0.1:3000/student/update/" + this.studentId,
          request
        );
      }

      this.onCancel();
      let response = await axios.get("http://127.0.0.1:3000/students");
      this.students = response.data;
    },
    async onDelete(id) {
      await axios.delete("http://127.0.0.1:3000/student/delete/" + id);
      let response = await axios.get("http://127.0.0.1:3000/students");
      this.students = response.data;
    },
    onEdit(request) {
      this.name = request.studentname;
      this.branch = request.branch;
      this.gender = request.gender;
      this.studentId = request.studentdetailsid;
      this.isCreate = true;
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
