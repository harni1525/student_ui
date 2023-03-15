<template>
  <div class="home" style="text-align: center;margin: auto;
  width: 50%;">
    
            <table border="0">
                <tr>
                    <td></td>
                    <td style="color:red;">salary calculation form</td>
                </tr>
                <tr>
                    <th><label for="Location"><strong>Location:</strong></label></th>
                    <td><input class="inp-text" name="Location" id="Location" type="text" size="30" /></td>
                </tr>
                <tr>
                    <th><label for="Status"><strong>Status:</strong></label></th>
                    <td><input class="inp-text" name="Status" id="Status" size="30" /></td>
                </tr>
            </table>
          

    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "SalaryCalculation",
  components: {
   
  }
};
</script>
