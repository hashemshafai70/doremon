<template>
    <div style="background-color: rgb(249 249 249)">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default {
    name : 'FrontLayout',
    components : {
        Header , Footer
    }
}
</script>