import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        neww: [
           { username: '', password: '', firstName: '', lastName: '', middleName: '', designation: '', descriptionTask: '', email: '', country: '', stateProvince: '', landline1: '', landline2: '', phonenumber1: '', phonenumber2: '', phonenumber3: '', sss: '', philhealth: '', pagibig: '', tagsCategories: '', leaveRemaining: '', ratePerHour: '', picker: new Date().toISOString().substr(0, 10), picks: new Date().toISOString().substr(0, 10), files: '',}
               
        ],
        items: [
                'construction worker','assistant hr' ,'hr manager', 'accountant', 'accountant assistant', 'accounting manager', 'site engineer', 'engineering manager'
        ],
        tags: [
            'tagA', 'tagB', 'tagC',
        ]
    }
})