<script>
  import uuidv4 from "uuid/v4";
	import SimpleTag from "../../UI/SimpleTag.svelte";
	import CustomInput from "../../UI/CustomInput.svelte";
	import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Pristine from "pristinejs/dist/pristine";

	let dispatcher = createEventDispatcher();
  let tempComponents = [];
	let newTag = null;
	let id = null;
	let name = '';
	let subtitle = '';
	let descrizione = '';
	let componenti = [];
	let fondatore = '';
	let email = '';
	let creato = '';
	let logo = '';
	let pristine = null;
	let defaultConfig = {
      classTo: 'control',
      errorClass: 'is-danger',
      successClass: 'is-success',
      errorTextParent: 'control',
      errorTextTag: 'p',
      errorTextClass: 'help is-danger'
	};

	onMount(() => {
	  const form = document.getElementById('add-nuance-form');
	  pristine = new Pristine(form, defaultConfig, true);
  });

	onDestroy(() => {
	  pristine.destroy();
  });

	function addNuance() {
	  if (pristine.validate()){
      id = uuidv4();
      const newNuance = {
        id: id,
        name: name,
        subtitle: subtitle,
        descrizione: descrizione,
        componenti: [...tempComponents],
        fondatore: fondatore,
        email: email,
        creato: creato,
        logo: logo
      };
      dispatcher('addnuance', {nuance: newNuance});
      resetForm();
      pristine.reset();
	  }
	}

	function resetForm() {
	  id = null;
	  logo = creato = email = descrizione = fondatore = name = subtitle = '';
	  componenti = tempComponents = [];
  }

	function addTag(e) {
		e.preventDefault();
		if (tempComponents.indexOf(newTag) < 0) {
			tempComponents = [...tempComponents, newTag];
		}
		newTag = null;
	}

	function handleTagDeletion(index) {
		tempComponents.splice(index, 1);
		tempComponents = [...tempComponents];
	}
</script>
<form id="add-nuance-form"
		on:submit|preventDefault={ addNuance }>
  <CustomInput controltype="input"
               label="Nome"
               value={ name }
               required="true"
               id="name"
               type="text"
               on:input={ event => name = event.target.value } >
  </CustomInput>
  <CustomInput controltype="input"
               label="Sottotitolo"
               value={ subtitle }
               id="subtitle"
               type="text"
               on:input={ event => subtitle = event.target.value } >
  </CustomInput>
  <CustomInput controltype="textarea"
               label="Descrizione"
               required="true"
               value={ descrizione }
               id="descrizione"
               on:input={ event => descrizione = event.target.value } >
  </CustomInput>
  <CustomInput controltype="input"
               label="Fondatore"
               value={ fondatore }
               required="true"
               id="fondatore"
               type="text"
               on:input={ event => fondatore = event.target.value } >
  </CustomInput>
  <div class="columns">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label for="tags-list" class="label">
          Nuovo tag
        </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="text"
                   placeholder="Aggiungi un tag"
                   bind:value={ newTag }>
            <button class="button is-small"
                    on:click={addTag}>
              Add tag
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="field">
    <label class="description">Componenti</label>
    <div class="control">
      <div class="textarea"
           rows="3" aria-required="true" required>
        <div class="tags are-medium">
          {#each tempComponents as tizio, index}
            <SimpleTag tagContent={tizio}
                       {index}
                       on:deletetag={() => handleTagDeletion(index)}>
            </SimpleTag>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <CustomInput controltype="input"
               label="Email"
               value={ email }
               required="true"
               id="email"
               type="email"
               on:input={ event => email = event.target.value } >
  </CustomInput>
  <CustomInput controltype="input"
               label="Creato il"
               value={ creato }
               required="true"
               id="creato"
               type="date"
               on:input={ event => creato = event.target.value } >
  </CustomInput>
  <CustomInput controltype="input"
               label="Logo"
               value={ logo }
               id="logo"
               type="text"
               on:input={ event => logo = event.target.value } >
  </CustomInput>
  <div class="row">
    <button class="button"
            type="submit">
      Aggiungi
    </button>
  </div>
</form>
