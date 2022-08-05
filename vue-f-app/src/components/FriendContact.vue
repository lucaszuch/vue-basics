<template>
    <li>
        <h2>{{friends.name}}</h2>
        <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                {{friends.phone}}
            </li>
            <li>
                <strong>Email:</strong>
                {{friends.email}}
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friends: {
                id: 1,
                name: 'Lucas Zuchinalli',
                phone: '+32468341003',
                email: 'zuchinalli@gmail.com'
            }
        };
    },
    methods: {
        toggleDatails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>
