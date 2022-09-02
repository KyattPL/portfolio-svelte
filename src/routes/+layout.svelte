<script lang="ts">
    import "../app.css";
    import { browser } from "$app/environment";
    import { base } from "$app/paths";
    import logo from "$lib/assets/logo.jpg";

    let theme: string = "";
    let isBurgerOpen: boolean = false;

    $: {
        if (browser) {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add("dark");
                theme = "dark";
            } else {
                document.documentElement.classList.remove("dark");
                theme = "light";
            }
        }
    }

    function changeTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            theme = "dark";
        }
        console.log(theme);
    }

    function openMenu() {
        isBurgerOpen = true;
    }

    function closeMenu() {
        isBurgerOpen = false;
    }
</script>

<svelte:window on:resize={closeMenu} />

<div class="h-screen">
    <div
        class="flex px-4 py-8 items-center bg-slate-200 dark:border-black border-gray-400 border-b-4 dark:bg-black dark:text-white  text-2xl font-sans h-40">
        <div class="mr-4">
            <a href="{base}/">
                <img class="rounded-full object-scale-down w-20" src={logo} alt="logo" />
            </a>
        </div>
        <div class="flex-1 text-sm md:text-4xl self-center font-bold">
            <h2>Kajetan "Kyatt" Pynka</h2>
        </div>
        {#if isBurgerOpen}
            <div class="flex-none block lg:hidden">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={closeMenu}>
                    X
                </button>
            </div>
        {:else}
            <div class="flex-none block lg:hidden">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={openMenu}>
                    ☰
                </button>
            </div>
        {/if}
        <div class="flex-none mx-2 hidden lg:block">
            <a href="{base}/about">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    >About
                </button>
            </a>
        </div>
        <div class="flex-none mx-2 hidden lg:block">
            <a href="{base}/projects">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    >Projects
                </button>
            </a>
        </div>
        <div class="flex-none mx-2 hidden lg:block">
            <a href="{base}/github">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    >Github
                </button>
            </a>
        </div>
        {#if theme === "dark"}
            <div class="flex-none mx-2 hidden lg:block">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 py-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={changeTheme}>
                    ☀️
                </button>
            </div>
        {:else}
            <div class="flex-none mx-2 hidden lg:block">
                <button
                    class="rounded-full bg-slate-300 dark:bg-slate-700 px-8 p-4 dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={changeTheme}>
                    🌙
                </button>
            </div>
        {/if}
    </div>
    {#if isBurgerOpen}
        <div
            class="w-full py-2 text-center bg-slate-300 dark:bg-slate-700 dark:text-white text-2xl dark:hover:bg-slate-600 hover:bg-slate-400">
            <a href="{base}/about">
                <p>About</p>
            </a>
        </div>
        <div
            class="w-full py-2 text-center bg-slate-300 dark:bg-slate-700 dark:text-white text-2xl dark:hover:bg-slate-600 hover:bg-slate-400">
            <a href="{base}/about">
                <p>Projects</p>
            </a>
        </div>
        <div
            class="w-full py-2 text-center bg-slate-300 dark:bg-slate-700 dark:text-white text-2xl dark:hover:bg-slate-600 hover:bg-slate-400">
            <a href="{base}/about">
                <p>Github</p>
            </a>
        </div>
        {#if theme === "dark"}
            <div class="">
                <button
                    class="w-full py-2 text-center bg-slate-300 dark:bg-slate-700 dark:text-white text-2xl dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={changeTheme}>
                    ☀️
                </button>
            </div>
        {:else}
            <div class="">
                <button
                    class="w-full py-2 text-center bg-slate-300 dark:bg-slate-700 dark:text-white text-2xl dark:hover:bg-slate-600 hover:bg-slate-400"
                    on:click={changeTheme}>
                    🌙
                </button>
            </div>
        {/if}
    {/if}
    <slot />
</div>
