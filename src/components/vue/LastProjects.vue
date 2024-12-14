<script lang="ts" setup>
import useReadme from '@composables/readme.composable';
import useLastProjects from '@composables/last-projects.composable';

const args = "scirats"

const { projects } = useLastProjects()
const { raw } = useReadme(args)
</script>

<template>
    <div>
        <div>sample content</div>
        <div>
            {{ raw }}
        </div>
    </div>
    <footer class="px-[12px] flex justify-center">
        <ul class="flex space-x-[24px]">
            <li v-for="item in projects"
                class="p-[16px] flex flex-col space-y-[8px] rounded-xl border border-gray-300 cursor-pointer">
                <div class="flex items-center text-base font-bold">
                    <div>[]</div>
                    <h1 class="px-[8px] text-blue-600">{{ item.name }}</h1>
                    <span class="px-[8px] rounded-full border border-gray-300 text-sm">{{ item.visibility }}</span>
                </div>
                <p class="text-sm">{{ item.description }}</p>
                <div class="flex space-x-[16px] text-sm">
                    <p class="flex items-center space-x-[6px]">
                        <span class="w-[8px] h-[8px] bg-gray-600 rounded-full"></span>
                        <span>Typescript</span>
                    </p>
                    <span>[start]</span>
                    <span>[merge]</span>
                </div>
            </li>
        </ul>
    </footer>
</template>