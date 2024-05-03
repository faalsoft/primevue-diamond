import{_ as i,b as s,c as o,i as t,A as n,B as l,d as a}from"./index-c4f39c8f.js";const d={},r=e=>(n("data-v-ea6f9021"),e=e(),l(),e),p={class:"card docs"},m=t(`<h2 data-v-ea6f9021>Getting Started</h2><p data-v-ea6f9021> Diamond is an application template for Vue 3 based on <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-ea6f9021>create-vue</a>, the recommended way to start a <strong data-v-ea6f9021>Vite-powered</strong> Vue projects. To get started, extract the contents of the zip file, cd to the directory and install the dependencies with npm or yarn. </p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>npm install</code></pre><p data-v-ea6f9021>Next step is running the application using the serve script and navigate to <i data-v-ea6f9021>http://localhost:5173/</i> to view the application. That is it, you may now start with the development using the Diamond template.</p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>npm run dev</code></pre><h4 data-v-ea6f9021>Structure</h4><p data-v-ea6f9021>Diamond consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="line-height-3" data-v-ea6f9021><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>src/layout</span>: Main layout files, need to be present</li><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>src/views</span>: Demo pages</li><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>public/demo</span>: Assets used in demos</li><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>public/layout</span>: Assets used in layout</li><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>src/assets/demo</span>: Styles used in demos</li><li data-v-ea6f9021><span class="text-primary font-medium" data-v-ea6f9021>src/assets/layout</span>: SCSS files of the main layout</li></ul><h4 data-v-ea6f9021>Default Configuration</h4><p data-v-ea6f9021> Initial layout configuration can be defined at the main app component by injecting the composable from <span class="text-primary font-medium" data-v-ea6f9021>src/layout/composables/layout</span>, this step is optional and only necessary when customizing the defaults. Note that <span class="text-primary font-medium" data-v-ea6f9021>theme</span> and <span class="text-primary font-medium" data-v-ea6f9021>scale</span> are not reactive at the moment since theme is configured outside of Vue at <strong class="font-semibold" data-v-ea6f9021>index.html</strong> by default and initial scale is defined with the <span class="text-primary font-medium" data-v-ea6f9021>$scale</span> at <strong class="font-semibold" data-v-ea6f9021>layout.scss</strong>. When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. </p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>&lt;script setup&gt;
import { useLayout } from &#39;@/layout/composables/layout&#39;;

const { layoutConfig } = useLayout();
layoutConfig.menuMode.value = &#39;slim&#39;;
&lt;/script&gt;

&lt;template&gt;
    &lt;router-view /&gt;
&lt;/template&gt;

&lt;style scoped&gt;&lt;/style&gt;
</code></pre><h4 data-v-ea6f9021>Menu</h4><p data-v-ea6f9021> Main menu is located at <span class="text-primary font-medium" data-v-ea6f9021>src/layout/AppMenu.vue</span> file. Update the <span class="text-primary font-medium" data-v-ea6f9021>model</span> property to define the menu of your application using PrimeVue MenuModel API. </p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

import AppSubMenu from &#39;./AppSubMenu.vue&#39;;

const model = ref([
    {
        label: &#39;Dashboards&#39;,
        icon: &#39;pi pi-home&#39;,
        items: [
            {
                label: &#39;E-Commerce&#39;,
                icon: &#39;pi pi-fw pi-home&#39;,
                to: &#39;/&#39;
            },
            {
                label: &#39;Banking&#39;,
                icon: &#39;pi pi-fw pi-image&#39;,
                to: &#39;/dashboard-banking&#39;
            }
        ]
    },
    //...
</code></pre><h4 data-v-ea6f9021>Breadcrumb</h4><p data-v-ea6f9021>Breadcrumb component at the topbar section is dynamic and retrieves the path information from the router using the <span class="text-primary font-medium" data-v-ea6f9021>meta.breadcrumb</span> property.</p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>{
    path: &#39;/uikit/formlayout&#39;,
    name: &#39;formlayout&#39;,
    meta: {
        breadcrumb: [&#39;UI Kit&#39;, &#39;Form Layout&#39;]
    },
    component: () =&gt; import(&#39;@/views/uikit/FormLayout.vue&#39;)
},</code></pre><h4 data-v-ea6f9021>Integration with Existing Vite Applications</h4><p data-v-ea6f9021>Only the folders that are related to the layout needs to move in to your project. We&#39;ve created a short tutorial with details. It is based on Sakai but flow is exactly the same with Diamond.</p>`,19),c=r(()=>a("div",{class:"video-container"},[a("iframe",{class:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/AHeSjJFR3ZE",frameborder:"0",allowfullscreen:""})],-1)),f=t(`<h4 data-v-ea6f9021>Component Theme</h4><p data-v-ea6f9021> Diamond provides 30 PrimeVue themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside <span class="text-primary font-medium" data-v-ea6f9021>public/layout/styles/theme/</span> folder such as <span class="text-primary font-medium" data-v-ea6f9021>public/layout/styles/theme/theme-light/blue/theme.css</span>. </p><p data-v-ea6f9021>A custom theme can be developed by the following steps.</p><ul data-v-ea6f9021><li class="line-height-4" data-v-ea6f9021>Choose a custom theme name such as &quot;mytheme&quot;.</li><li class="line-height-4" data-v-ea6f9021>Create a folder named &quot;mytheme&quot; under <span class="font-semibold" data-v-ea6f9021>public/layout/styles/theme/theme-light/mytheme</span> folder.</li><li class="line-height-4" data-v-ea6f9021>Create a file such as theme.scss inside your &quot;mytheme&quot; folder.</li><li class="line-height-4" data-v-ea6f9021>Define the variables listed below in your file and import the dependencies.</li><li class="line-height-4" data-v-ea6f9021> Include the theme.scss in your application via an import in <i data-v-ea6f9021>src/assets/styles.scss</i>or simply refer to the compiled css with a link tag. Note that if you choose the former, the theme will be bundled with the rest of your app. </li></ul><p data-v-ea6f9021>Here are the variables required to create a theme.</p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>$primaryColor: #2196F3;
$primaryLightColor: scale-color($primaryColor, $lightness: 60%) !default;
$primaryDarkColor: scale-color($primaryColor, $lightness: -10%) !default;
$primaryDarkerColor: scale-color($primaryColor, $lightness: -20%) !default;
$primaryTextColor: #ffffff;

$highlightBg: #E3F2FD;
$highlightTextColor: #495057;
$highlightFocusBg: rgba($primaryColor, 0.24);

@import &#39;../_variables&#39;;
@import &#39;../../theme-base/_components&#39;;
@import &#39;../_extensions&#39;;</code></pre><h4 data-v-ea6f9021>Theme Switcher</h4><p data-v-ea6f9021> Dynamic theming is built-in to the template and implemented by including the theme via a link tag instead of bundling the theme along with a configurator component to switch it. In order to switch your theme dynamically as well, it needs to be compiled to css. An example sass command to compile the css would be; </p><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>sass --update public/layout/styles/theme/theme-light/mytheme.scss:public/layout/styles/theme/theme-light/mytheme.css</code></pre><p class="text-sm" data-v-ea6f9021>*Note: The sass command above is supported by Dart Sass. Please use Dart Sass instead of Ruby Sass.</p><h4 data-v-ea6f9021>Theme Designer</h4><p data-v-ea6f9021> Diamond includes a simplified version of the <a href="https://www.primefaces.org/designer/primevue" data-v-ea6f9021>PrimeVue Theme Designer</a> that only includes the main SASS structure. Full list of SASS variables to customize the components further is available at the <a href="https://www.primefaces.org/designer/api/primevue/3.9.0/" class="font-medium text-primary hover:underline" data-v-ea6f9021>SASS API</a> docs. </p><h5 data-v-ea6f9021>Menu Theme</h5><p data-v-ea6f9021>Menu skin has 13 alternatives to choose from in light mode, note that in dark and dim modes menu theme is not applied by design. Possible values for the menu theme are the following.</p><ul class="pl-5 line-height-3" data-v-ea6f9021><li data-v-ea6f9021>blue</li><li data-v-ea6f9021>bluegray</li><li data-v-ea6f9021>brown</li><li data-v-ea6f9021>cyan</li><li data-v-ea6f9021>darkgray</li><li data-v-ea6f9021>deeppurple</li><li data-v-ea6f9021>green</li><li data-v-ea6f9021>indigo</li><li data-v-ea6f9021>orange</li><li data-v-ea6f9021>pink</li><li data-v-ea6f9021>purple</li><li data-v-ea6f9021>teal</li><li data-v-ea6f9021>white</li></ul><p data-v-ea6f9021>A custom menu theme can be developed by steps below.</p><ul class="pl-5 line-height-3" data-v-ea6f9021><li data-v-ea6f9021>Choose a custom theme name such as &quot;mymenu&quot;.</li><li data-v-ea6f9021>Create a file named &quot;_mymenu.scss&quot; under <span class="font-semibold" data-v-ea6f9021>assets/layout/sidebar/themes</span> folder.</li><li data-v-ea6f9021>Define the variables listed below in your file.</li><li data-v-ea6f9021>Import the file at <span class="font-semibold" data-v-ea6f9021>assets/layout/layout.scss</span>.</li><li data-v-ea6f9021>Configure the menutheme property at layoutservice with the name of your sidebar theme e.g. mymenu.</li></ul><pre class="app-code" data-v-ea6f9021><code data-v-ea6f9021>.layout-sidebar-mymenu {
    --d-sidebar-bg-color:#2196F3;
    --d-sidebar-bg-color-alt:#1769aa;
    --d-sidebar-border:0 none;
    --d-app-name-color:#ffffff;
    --d-menu-separator-border: 1px solid rgba(255,255,255,0.2);
    --d-menuitem-root-text-color: rgba(255,255,255,0.6);
    --d-menuitem-text-color: rgba(255,255,255,0.8);
    --d-menuitem-hover-bg: rgba(255,255,255,0.1);
    --d-menuitem-active-bg: rgba(255,255,255,0.1);
    --d-menuitem-text-active-color: #ffffff;
    --d-menuitem-focus-shadow: 0 0 0 0.2rem rgba(255,255,255,0.1);
}</code></pre><h4 data-v-ea6f9021>Migration</h4><p data-v-ea6f9021> Initial integration with an existing Vite application and the migration process is similar. During an update, only the layout folder and layout assets folder need to be updated, see the &quot;Integration with Existing Vite Applications&quot; section for more information. Important changes are also documented at CHANGELOG.md file. </p>`,20),u=[m,c,f];function h(e,v){return s(),o("div",p,u)}const g=i(d,[["render",h],["__scopeId","data-v-ea6f9021"]]);export{g as default};
