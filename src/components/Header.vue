<template>
    <div>
        <h1>Barra de navegación</h1>
        <u>
            <li>
                <router-link to="/">Index</router-link>
            </li>
            <li>
                <router-link to="maximos-goleadores">Goleadores</router-link>
            </li>
            <li>
                <router-link to="login">Login</router-link>
            </li>
            <li>
                <router-link to="calendario">Calendario</router-link>
            </li>
            <li>
                <router-link to="acercade">Acerca De</router-link>
            </li>
        </u>
    </div>
</template>

<script>
export default {
        name: 'Header',
        props: {
            title: String
        }
    }
</script>