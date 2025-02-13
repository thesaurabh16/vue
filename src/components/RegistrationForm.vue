<template>
   <form @submit.prevent="handleSubmit">
        <h2>Register</h2>

        <label>Full Name:</label>
        <input type="text" v-model="form.fullName">
        <div v-if="v$.form.fullName.$error" class="error">
            {{ v$.form.fullName.$errors[0].$message }}
        </div>

        <label>Email:</label>
        <input type="email" v-model="form.email">
        <div v-if="v$.form.email.$error" class="error">
            {{ v$.form.email.$errors[0].$message }}
        </div>

        <label>Mobile Number:</label>
        <input type="text" v-model="form.mobile">
        <div v-if="v$.form.mobile.$error" class="error">
            {{ v$.form.mobile.$errors[0].$message }}
        </div>

        <label>Password:</label>
        <input type="password" v-model="form.password">
        <div v-if="v$.form.password.$error" class="error">
            {{ v$.form.password.$errors[0].$message }}
        </div>


        <label>Confirm Password:</label>
        <input type="password" v-model="form.confirmPassword">
        <div v-if="v$.form.confirmPassword.$error" class="error">
            {{ v$.form.confirmPassword.$errors[0].$message }}
        </div>

        <div class="submit">
            <button type="submit">Register</button>
        </div>
    </form>
</template>

<script>
import { required, email, minLength, sameAs, helpers, numeric } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
    export default {
        name:'RegistrationForm',
        data() {
        return {
            form: {
                fullName: "",
                email: "",
                mobile: "",
                password: "",
                confirmPassword: ""
            },
            v$: null
        };
    },
    validations() {
        return {
            form: {
                fullName: { required: helpers.withMessage("Full Name is required", required) },
                email: { required: helpers.withMessage("Email is required", required), email: helpers.withMessage("Enter a valid email", email) },
                mobile: { 
                    required: helpers.withMessage("Mobile number is required", required),
                    numeric: helpers.withMessage("Only numbers are allowed", numeric),
                    minLength: helpers.withMessage("Mobile number must be 10 digits", minLength(10))
                },
                password: { 
                    required: helpers.withMessage("Password is required", required),
                    minLength: helpers.withMessage("Password must be at least 8 characters", minLength(8))
                },
                confirmPassword: { 
                    required: helpers.withMessage("Confirm Password is required", required),
                    sameAs: helpers.withMessage("Passwords do not match", sameAs(this.form.password))
                }
            }
        };
    },
    created() {
        this.v$ = useVuelidate(this.validations, this.form); 
    },
    methods: {
        async handleSubmit() {
            const isValid = await this.v$.$validate();
            if (!isValid) return;

            console.log("Form Submitted Successfully!", this.form);
        }
    }
    };
</script>

<style scoped>
form {
    max-width: 400px;
    margin: 30px auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
}


label {
    color: #333;
    display: block;
    margin: 15px 0 5px;
    font-size: 14px;
    font-weight: bold;
}


input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5px;
}

.error {
    color: red;
    font-size: 12px;
    margin-top: -5px;
}


button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background: #0056b3;
}
</style>