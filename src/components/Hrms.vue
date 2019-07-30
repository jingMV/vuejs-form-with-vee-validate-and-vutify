<template>
<div id="hrms">
    <div class="wrapper">
        <section>

            <h1>ERP APPLICATION FORM</h1>
            
        <form @submit.prevent="validateBeforeSubmit" v-for="neW in neww" :key="neW.Id">
        <h2>Information</h2>
        <!--USERNAME-->
        <div class="input-wrapper">
            <label for="username" class="labels">Username</label>
            <p>
                <input name="username" 
                v-model="neW.username" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('username') }" 
                type="text" placeholder="Username"><br>

                <span v-show="errors.has('username')" 
                class="errorStyle">{{ errors.first('username') }}</span>
            </p>
        </div>
        <!--EMAIL-->
        <div class="input-wrapper" >
            <p>
            <label for="email" class="labels">Email</label>
            <input name="email"
            v-model="neW.email"
            v-validate="'required|email'"
            :class="{'input': true, 'inputStyle': errors.has('email')}"
            type="email"
            placeholder="Email">
            
            <span v-show="errors.has('email')" 
            class="errorStyle">{{ errors.first('email') }}</span>
            </p>
        </div>
        <!--PASSWORD-->
        <div class="input-wrapper">
            <label for="password" class="labels">Password</label>
            <p>
                <input name="password" 
                v-model="neW.password" 
                v-validate="'required|min:6'" 
                :class="{'input': true, 'inputStyle': errors.has('password') }" 
                type="password" placeholder="Password"><br>

                <span v-show="errors.has('password')" class="errorStyle">
                    {{ errors.first('password') }}</span>
            </p>
        </div>

        <!--FIRST LAST MIDDLE-->
        <div class="name-wrap">

        <div class="input-wrapper">
            <label for="firstname" class="labels">Firstname</label>
            <p>
                <input name="firstname" 
                v-model="neW.firstName" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('firstname') }" 
                type="text" placeholder="Firstname"><br>

                <span v-show="errors.has('firstname')" class="errorStyle">
                    {{ errors.first('firstname') }}</span>
            </p>
        </div>

        <div class="input-wrapper">
            <label for="lastname" class="labels">Lastname</label>
            <p>
                <input name="lastname" 
                v-model="neW.lastName" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('lastname') }" 
                type="text" placeholder="Lastname"><br>

                <span v-show="errors.has('lastname')" class="errorStyle">
                    {{ errors.first('lastname') }}</span>
            </p>
        </div>

        <div class="input-wrapper">
            <label for="middlename" class="labels">Middlename</label>
            <p>
                <input name="middlename" 
                v-model="neW.middleName" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('middlename') }" 
                type="text" placeholder="Middlename"><br>

                <span v-show="errors.has('lastname')" class="errorStyle">
                    {{ errors.first('lastname') }}</span>
            </p>
        </div>
        </div>

        <!--END FIRST LAST MIDDLE-->

        <!--ADDRESS-->
        <div class="input-wrapper">
        <p>
        <label for="Country" class="labels">Country</label>
        <country-select class="address-select-style" name="country"
        v-validate="'required'" :class="{'input': true, 'inputStyle': errors.has('country') }"
        v-model="neW.country"
        :country="neW.country"
        topCountry="PH"/>
        <span v-show="errors.has('country')" class="errorStyle">{{ errors.first('country') }}</span>

        <region-select class="address-select-style" name="region"
        v-validate="'required'" :class="{'input': true, 'inputStyle': errors.has('region') }"
        v-model="neW.region"
        :country="neW.country"
        :region="neW.region" />
        <span v-show="errors.has('region')" class="errorStyle">{{ errors.first('region') }}</span>
        </p>
        </div>
        
        <!--END ADDRESS-->

        <!--BIRThDAY-->
        <div class="input-wrapper">
            <label for="birthday" class="labels">Birthday</label>
            <p>
                <input name="birthday"
                v-model="neW.birthday"
                v-validate="'required|date_format:dd/MM/yyyy'"
                placeholder="dd/mm/yyyy"
                type="text"
                :class="{'input': true, 'inputStyle': errors.has('birthday') }">
                
                <span v-show="errors.has('birthday')" class="errorStyle">
                {{ errors.first('birthday') }}</span>
            </p>
        </div>

        <!--DESIGNAtiON-->
        <div class="input-wrapper">
        <label for="designation" class="labels">Designation</label>
        <v-select
           name="designation"
           v-model="neW.designation"
           v-validate="'required'"
          :items="items"
           label="Designation"
          outline
        ></v-select>
        <span v-show="errors.has('designation')" class="errorStyle">{{ errors.first('designation') }}</span>
        </div>
        <!--DESCRIPTION/TASK-->
        <div class="input-wrapper">
            <label for="description/task" class="labels">Description / Task</label>
            <p>
                <input name="description/task" 
                v-model="neW.descriptionTask" 
                v-validate="'required|alpha'" 
                :class="{'input': true, 'inputStyle': errors.has('description/task') }" 
                type="text" placeholder="description/task"><br>

                <span v-show="errors.has('description/task')" class="errorStyle">
                    {{ errors.first('description/task') }}</span>
            </p>
        </div>

        <h2>Contact Details</h2>

        <!--LANDLINE-->
        <div class="input-wrapper">
        <label for="landline1" class="labels">Lineline 1</label>
            <p>
                <input name="landline1" 
                v-model="neW.landline1" 
                v-validate="'required|numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('landline1') }" 
                type="text" placeholder="Landline 1"><br>

                <span v-show="errors.has('landline1')" class="errorStyle">
                {{ errors.first('landline1') }}</span>
            </p>
        </div>

        <div class="input-wrapper">
        <label for="landline2" class="labels">Lineline 2</label>
            <p>
                <input name="landline2" 
                v-model="neW.landline2" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('landline2') }" 
                type="text" placeholder="Landline 2"><br>

                <span v-show="errors.has('landline2')" class="errorStyle">
                {{ errors.first('landline2') }}</span>
            </p>
        </div>
        <!--PHONE NUMBER-->

        <div class="input-wrapper">
        <label for="phonenumber1" class="labels">Phone Number 1</label>
            <p>
                <input name="phonenumber1" 
                v-model="neW.phonenumber1" 
                v-validate="'required|numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('phonenumber1') }" 
                type="text" placeholder="Phone Number 1"><br>

                <span v-show="errors.has('phonenumber1')" class="errorStyle">
                {{ errors.first('phonenumber1') }}</span>
            </p>
        </div>

        <div class="input-wrapper">
        <label for="phonenumber2" class="labels">Phone Number 2</label>
            <p>
                <input name="phonenumber2" 
                v-model="neW.phonenumber2" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('phonenumber2') }" 
                type="text" placeholder="Phone Number 2"><br>

                <span v-show="errors.has('phonenumber2')" class="errorStyle">
                {{ errors.first('phonenumber2') }}</span>
            </p>
        </div>

        <div class="input-wrapper">
        <label for="phonenumber3" class="labels">Phone Number 3</label>
            <p>
                <input name="phonenumber3" 
                v-model="neW.phonenumber3" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('phonenumber3') }" 
                type="text" placeholder="Phone Number 3"><br>

                <span v-show="errors.has('phonenumber3')" class="errorStyle">
                {{ errors.first('phonenumber3') }}</span>
            </p>
        </div>

        <h2>Others</h2>
        <!--SSS-->
        <div class="input-wrapper">
        <label for="sss" class="labels">SSS Number</label>
            <p>
                <input name="sss" 
                v-model="neW.sss" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('sss') }" 
                type="text" placeholder="sss"><br>

                <span v-show="errors.has('sss')" class="errorStyle">
                {{ errors.first('sss') }}</span>
            </p>
        </div>

        <!--PHILHEALTH-->
        <div class="input-wrapper">
        <label for="philhealth" class="labels">PHILHEALTH Number</label>
            <p>
                <input name="philhealth" 
                v-model="neW.philhealth" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('philhealth') }" 
                type="text" placeholder="philhealth"><br>

                <span v-show="errors.has('philhealth')" class="errorStyle">
                {{ errors.first('philhealth') }}</span>
            </p>
        </div>

        <!--PAGIBIG-->
        <div class="input-wrapper">
        <label for="pagibig" class="labels">PAGIBIG Number</label>
            <p>
                <input name="pagibig" 
                v-model="neW.pagibig" 
                v-validate="'numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('pagibig') }" 
                type="text" placeholder="pagibig"><br>

                <span v-show="errors.has('pagibig')" class="errorStyle">
                {{ errors.first('pagibig') }}</span>
            </p>
        </div>

        <!--TAGS/CATEGORIES-->
        <div class="input-wrapper">
        <label for="tags/categories" class="labels">Tags/Categories</label>
        <v-select
           name="tags/categories"
           v-model="neW.tagsCategories"
           v-validate="'required'"
          :items="tags"
           label="Tags/Categories"
          outline
        ></v-select>
        <span v-show="errors.has('tags/categories')" class="errorStyle">{{ errors.first('tags/categories') }}</span>
        </div>

        <!--Rate per Hour-->
        <div class="input-wrapper">
        <label for="ratePerHour" class="labels">Rate Per Hour</label>
            <p>
                <input name="ratePerHour" 
                v-model="neW.ratePerHour" 
                v-validate="'required|numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('ratePerHour') }" 
                type="text" placeholder="Rate Per Hour"><br>

                <span v-show="errors.has('ratePerHour')" class="errorStyle">
                {{ errors.first('ratePerHour') }}</span>
            </p>
        </div>

        <!--Leave Remaining-->
        <div class="input-wrapper">
        <label for="leaveRemaining" class="labels">Leave Remaining</label>
            <p>
                <input name="leaveRemaining" 
                v-model="neW.leaveRemaining" 
                v-validate="'required|numeric'" 
                :class="{'input': true, 'inputStyle': errors.has('leaveRemaining') }" 
                type="text" placeholder="Leave Remaining"><br>

                <span v-show="errors.has('leaveRemaining')" class="errorStyle">
                {{ errors.first('leaveRemaining') }}</span>
            </p>
        </div>

        <!--DATE EMPLOYED-->
        <div class="input-wrapper">
           
            <label for="dateEmployed" class="labels">Date Employed</label>
             <p>
                 <br>
            <v-date-picker name="dateEmployed"
            v-validate="'required'"
            v-model="neW.picker"
            color="green" 
            width="270px">
            </v-date-picker>
            <span v-show="errors.has('dateEmployed')" class="errorStyle">
            {{ errors.first('dateEmployed') }}</span>
            </p>
        </div>

        <!--DATE EMPLOYED-->
        <div class="input-wrapper">
            
            <label for="dateTerminated" class="labels">Date Terminated / Resign</label>
            <p>
                <br>
            <v-date-picker name="dateTerminated"
            v-validate="'required'"
            v-model="neW.picks"
            color="light green" 
            width="270px">
            </v-date-picker>
            <span v-show="errors.has('dateTerminated')" class="errorStyle">
            {{ errors.first('dateTerminated') }}</span>
            </p>
        </div>
        <!--FILES-->
        
        
        


        <!--SUBMIT BTN-->
            <div>
            <p class="control">
            <button class="btn-style" type="submit">Submit</button>
            </p>
        </div>
            </form>
        </section>
    </div>
</div>
</template>
<script>
import 'vue-select/dist/vue-select.css';

export default {
    name: 'Hrms',
    data: () => ({

    }),
    methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
        }
        alert('Correct them errors!');
      });
    }
  },
  computed: {
      neww() {
          return this.$store.state.neww
      },
      items() {
          return this.$store.state.items
      },
    tags() {
          return this.$store.state.tags
      }
  },
};

</script>
<style scoped>

section h1 {
    text-align: center;
    margin: 10px 0px 20px;
    color: #008000;
}

#hrms {
    background: #AED581;
    padding-top: 30px;
}
form {
    width: 300px;
    margin: 0px auto;
    background: #fff;
    padding: 10px;
}
form h2 {
    background: #1E88E5;
    padding: 10px;
    color: #fff;
    font-size: 17px;
    font-family: 'montserrat';
    margin-bottom: 20px;
}
.labels {
    font-weight: 500;
    color: #2E4053;
    font-size: 17px;
}
input {
    background: #E3F2FD;
    font-size: 15px;
    width: 100%;
    height: 30px;
}
.errorStyle {
    color: red;
    font-size: 12px;
    font-style: italic
}
.inputStyle {
    border: 1px solid #EF5350;
}
.btn-style {
    background: #2196F3;
    color: white;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    margin: 20px 0px;
    width: 100%
}
.btn-style:hover {
    background: #0D47A1;
}
.address-select-style {
    padding: 10px;
    border: 1.5px solid grey;
    margin: 10px 0px;
    width: 100%;
    cursor: pointer;
}
select {
    background: rgb(162, 216, 255);
    width: 50%;
    cursor: pointer;
    border: 1px solid grey
}
</style>

