<template>
<!-- <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Homepage</title>
    <link rel="stylesheet" href="./res/css/style.css">
    <link rel="stylesheet" href="./res/css/index.css">
</head> -->

<body>
    <div class="ix-mainbars">
        <aside></aside>
        <main>
            Here will come all the posts!
        </main>
        <aside></aside>
    </div>
    <!-- <script src="src/javascript.js"></script> -->
</body>
</template>

<script>
// @ is an alias to /src
//import  from "@/components/.vue";   

export default {
  name: "HomePage"
//   components: {
//     
//   },
};
</script>

<style scoped>
.ix-mainbars {
    /* height: 100vh; */
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.ix-mainbars>aside {
    flex-grow: 2;
    background-color: gainsboro;
    margin: 4px;
    margin-top: 0px;
}

.ix-mainbars>aside:nth-child(1) {
    order: 1;
}

.ix-mainbars>main:nth-child(2) {
    order: 2;
}

.ix-mainbars>aside:nth-child(3) {
    order: 3;
}

.ix-mainbars>main {
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-height: 85vh; /* hard coded */
    overflow: scroll;
}

article.post {
    margin: 4px;
    padding: 8px;
    background-color: ghostwhite;
}

header.postheader {
    min-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
}

.post-body {
    margin: 4px;
    min-height: 36px;
}

button.like {
    background-image: url("@/assets/thumbs-up-black-icon.svg");
    background-repeat: no-repeat;
    min-width: 24px;
    height: 24px;
    border: none;
}

@media (max-width: 600px) {
    .ix-mainbars {
        flex-direction: column;
    }

    .ix-mainbars>aside:nth-child(1) {
        order: 1;
    }

    .ix-mainbars>main:nth-child(2) {
        order: 3;
    }

    .ix-mainbars>aside:nth-child(3) {
        order: 1;
    }
}
</style>