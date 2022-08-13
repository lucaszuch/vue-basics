<template>
    <form @submit.prevent="addContact">
        <div>
            <label>Name: </label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Phone Number: </label>
            <input type="text" v-model="enteredPhone"/>
        </div>
        <div>
            <label>Email Address: </label>
            <input type="text" v-model="enteredEmail"/>
        </div>
        <button type="submit">
            Add New Friend
        </button>
    </form>
</template>

<script>
export default {
    emits: {
        'add-contact': (obj) => {
            if(typeof(obj) == 'object') {
                return true;
            } else {
                console.error('Data passed is not an object.')
                return false;
            }
        }
    },
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        addContact() {
            if(this.validateData) {
                this.$emit(
                    'add-contact',
                    {
                        name: this.enteredName,
                        phoneNumber: this.enteredPhone,
                        emailAddress: this.enteredEmail
                    }
                );

                alert('Submission accepted!');
            }    
        },
        validateData() {
            if(this.enteredName != '' ||
               this.enteredPhone != '' ||
               this.enteredEmail != '') {
                return true;
            } else {
                alert('Invalid submission');
                return false;
            }
        }
    }
}
</script>
