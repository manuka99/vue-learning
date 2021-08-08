<template>
<div class="root">

    <h1>1. Component Styles</h1>
    <h4>a. Default styles are applied globally.</h4>
    <h4>b. Default child styles will overide parent styles.</h4>
    <h4>c. Scoped wils add styles to html in its scope.</h4>
    <h4>d. By Default Scoped styles will leak into child.</h4>
    <h4>e. Parent styles will be applied for slots even though the content is there in the child</h4>
    <p>Parent styles</p>
    <ChildStyles />

    <h1>2. Dynamic Components</h1>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <!-- <TabA v-if="activeTab == 'TabA'" />
<TabB v-if="activeTab == 'TabB'" /> -->
    <Component :is="activeTab" />

    <h1>3. Live Dynamic Components</h1>
    <keep-alive>
        <Component :is="activeTab" />
    </keep-alive>

    <h1>4. Teleport (Portal)</h1>
    <teleport to="#portal-root">
        <Portal />
    </teleport>

    <h1>5. HTTP GET</h1>
    <PostList />

    <h1>6. Lifecycle</h1>
    <LifecycleParent />

    <h1>7. Template Ref</h1>
    <TemplateRef />

    <h1>8. Resuability and mixins</h1>
    <ClickCounter />
</div>
</template>

<script>
import ChildStyles from "./components/ChildStyles.vue";
import Portal from './components/Portal.vue';
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import PostList from "./components/PostList.vue";
import LifecycleParent from "./components/LifecycleParent.vue";
import TemplateRef from "./components/TemplateRef.vue";
import ClickCounter from "./components/ClickCounter.vue";

export default {
    name: 'App',
    components: {
        ChildStyles,
        TabA,
        TabB,
        Portal,
        PostList,
        LifecycleParent,
        TemplateRef,
        ClickCounter
    },
    data() {
        return {
            activeTab: 'TabA'
        }
    }
}
</script>

<style>
.root {
    background-color: whitesmoke;
}

p {
    color: blueviolet
}
</style>
