<script>
	import NuanceGrid from "./Nagger/Nuance/NuanceGrid.svelte";
	import BigHeroWithLinks from "./UI/BigHeroWithLinks.svelte";
	import MainNavbar from "./UI/MainNavbar.svelte";
	import NuanceForm from "./Nagger/Nuance/NuanceForm.svelte";
	import { onMount, onDestroy } from 'svelte';
	import nuanceStore from './nuance-store';

	let heroTitle = 'Infastidisci chi detesti!';
	let heroSubTitle = 'Digli che non vuoi sapere cosa pensano...';
	let link1 = '#nuance-list';
	let link1Text = 'Guarda i potenziali nemici ;-D';
	let link2 = '#new-nuance';
	let link2Text = 'Crea un gruppo';
	let newNuance = null;
	let nuances = [];
	let subscription;

	onMount(() => {
		subscription = nuanceStore.subscribe(items => {
			nuances = items;
		});
	});

	onDestroy(() => {
		subscription();
	});

	function handleAddNuance(event) {
		nuanceStore.update(items => {
			return [event.detail.nuance, ...items];
		});
	}

	function handleDeleteNuance(event) {
		nuanceStore.update(items => {
			return items.filter(item => item.id !== nuances[event.detail.index].id);
		});
	}
</script>

<style>
	.textarea {
		min-height: 40px;
	}
</style>

<MainNavbar/>
<BigHeroWithLinks {heroTitle} {heroSubTitle}
										{link1} {link1Text}
										{link2} {link2Text}>
</BigHeroWithLinks>
<div class="container is-fluid">
	<NuanceForm on:addnuance={ handleAddNuance }>
	</NuanceForm>
	<NuanceGrid {nuances}
							on:delete-nuance={handleDeleteNuance}>
	</NuanceGrid>
</div>
