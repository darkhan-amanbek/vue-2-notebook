<template>
    <div>
        About <br>
        <div :class="$style.red">Moduled class</div>
    </div>
</template>

<script>
export default {
    name: "About",
    mounted() {
        console.log(this.$style);
    }
}
</script>

<style module>
.red {
    color: red;
}

.blue {
    color: blue;
}

.white {
    color: white;
}
</style>