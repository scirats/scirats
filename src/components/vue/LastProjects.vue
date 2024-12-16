<script lang="ts" setup>
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons"
import { faCodeFork } from "@fortawesome/free-solid-svg-icons"
import useLastProjects from '@composables/last-projects.composable';

const { projects } = useLastProjects()
</script>

<template>
    <footer class="px-[12px] flex justify-center">
        <ul class="flex space-x-[24px]">
            <li v-for="item in projects">
                <a :href="item.html_url" target="_blank"
                    class="p-[16px] flex flex-col space-y-[8px] rounded-md border border-gray-300 cursor-pointer bg-[#FDFAEB]">
                    <div class="flex items-center text-base font-bold">
                        <div class="w-[12px]">
                            <font-awesome-icon :icon="faBookmark" />
                        </div>

                        <h1 class="px-[8px] text-blue-600">{{ item.name }}</h1>
                        <span class="px-[8px] rounded-md border border-gray-200 text-sm">{{ item.visibility }}</span>
                    </div>
                    <p class="text-sm">{{ item.description }}</p>
                    <div class="flex space-x-[16px] text-sm">
                        <p class="flex items-center space-x-[6px]">
                            <span class="w-[8px] h-[8px] bg-gray-600 rounded-full"></span>
                            <span>Typescript</span>
                        </p>
                        <div class="w-[12px]">
                            <font-awesome-icon :icon="faStar" />
                        </div>
                        <div class="w-[12px]">
                            <font-awesome-icon :icon="faCodeFork" />
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </footer>
</template>