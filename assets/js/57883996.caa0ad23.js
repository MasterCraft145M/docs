"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Generators Config",title:"Generators Configuration",sidebar_position:3.4},i=void 0,s={unversionedId:"BedWars1058/configuration/generators-configuration",id:"BedWars1058/configuration/generators-configuration",title:"Generators Configuration",description:"Explanation",source:"@site/docs/BedWars1058/configuration/generators-configuration.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/generators-configuration",permalink:"/docs/BedWars1058/configuration/generators-configuration",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/generators-configuration.md",tags:[],version:"current",lastUpdatedBy:"Xxyuri2005xX",lastUpdatedAt:1654894530,formattedLastUpdatedAt:"Jun 10, 2022",sidebarPosition:3.4,frontMatter:{sidebar_label:"Generators Config",title:"Generators Configuration",sidebar_position:3.4},sidebar:"bw1058",previous:{title:"Arena Config",permalink:"/docs/BedWars1058/configuration/Arena-Configuration"},next:{title:"Shop Config",permalink:"/docs/BedWars1058/configuration/shop"}},l={},d=[{value:"Explanation",id:"explanation",level:3},{value:"Custom generators per Arena Group",id:"custom-generators-per-arena-group",level:3}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"explanation"},"Explanation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Under the \"Default\" configuration section there is the configuration for all the arena groups\n#without a specified configuration. If you don't know what an arena group is you should read\n#about them here: https://wiki.andrei1058.dev/docs/BedWars1058/setup/arena-groups\nDefault:\n  #This contains the default settings for the iron generator on a team base\n  #A player can change those values for his team buying upgrades\n  #from the team upgrades NPC\n  iron:\n    #This is the iron-spawn delay in seconds\n    delay: 2\n    #How many iron ingots to spawn at once\n    amount: 2\n    #If the amount of iron ingots spawned on your generator\n    #is equal to this, it won't spawn items anymore until\n    #you collect the dropped items.\n    spawn-limit: 32\n\n  #This contains the settings for the gold generator on a team base\n  #A player can change those values for his team buying upgrades\n  #from the team upgrades NPC\n  gold:\n    #This is the gold-spawn delay in seconds\n    delay: 6\n    #How many gold ingots to spawn at once\n    amount: 2\n    #If the amount of gold ingots spawned on your generator\n    #is equal to this, it won't spawn items anymore until\n    #you collect the dropped items.\n    spawn-limit: 7\n\n  #This contains the settings for the diamond generators on a map\n  diamond:\n    #Settings for tier I\n    tierI:\n      #This is the diamond-spawn delay in seconds\n      delay: 30\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items\n      spawn-limit: 4\n\n    #Settings for tier II\n    tierII:\n      #This is the diamond-spawn delay in seconds\n      delay: 20\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 6\n      #When to upgrade diamond generators tier\n      #Time in seconds\n      #Upgrade after 360 seconds since the game start\n      start: 360\n\n    #Settings for tier III\n    tierIII:\n      #This is the diamond-spawn delay in seconds\n      delay: 15\n      #If the amount of diamonds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 8\n      #When to upgrade diamond generators tier\n      #Time in seconds\n      #Upgrade after 1080 seconds since tier II upgrade\n      start: 1080\n  emerald:\n    #Settings for tier I\n    tierI:\n      #This is the emerald-spawn delay in seconds\n      delay: 70\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 4\n\n    #Settings for tier II\n    tierII:\n      #This is the emerald-spawn delay in seconds\n      delay: 50\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 6\n      #When to upgrade emerald generators tier\n      #Time in seconds\n      #Upgrade after 720 seconds since the game start\n      start: 720\n\n    #Settings for tier III\n    tierIII:\n      #This is the emerald-spawn delay in seconds\n      delay: 30\n      #If the amount of emeralds spawned on a generator\n      #is equal to this, it won't spawn items anymore until\n      #you collect the dropped items.\n      spawn-limit: 8\n      #When to upgrade emerald generators tier\n      #Time in seconds\n      #Upgrade after 1440 seconds since tier II upgrade\n      start: 1440\n\n#Set this to true if you want to stack\n#the dropped items from generators\nstack-items: false\n")),(0,r.kt)("h3",{id:"custom-generators-per-arena-group"},"Custom generators per Arena Group"),(0,r.kt)("p",null,"If you don't know what is an arena group read about it ",(0,r.kt)("a",{parentName:"p",href:"arena-groups"},"here"),"."),(0,r.kt)("p",null,"Creating custom configuration it's really easy. Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," configuration path, paste it and rename ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," to your desired arena group. We'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"4v4v4v4")," as example. You can now change those configuration values for your ",(0,r.kt)("inlineCode",{parentName:"p"},"4v4v4v4")," arenas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"4v4v4v4:\n  iron:\n    delay: 2\n    amount: 2\n    spawn-limit: 32\n  gold:\n    delay: 6\n    amount: 2\n    spawn-limit: 7\n  diamond:\n    tierI:\n      delay: 30\n      spawn-limit: 4\n    tierII:\n      delay: 20\n      spawn-limit: 6\n      start: 360\n    tierIII:\n      delay: 15\n      spawn-limit: 8\n      start: 1080\n  emerald:\n    tierI:\n      delay: 70\n      spawn-limit: 4\n    tierII:\n      delay: 50\n      spawn-limit: 6\n      start: 720\n    tierIII:\n      delay: 30\n      spawn-limit: 8\n      start: 1440\n")))}c.isMDXComponent=!0}}]);