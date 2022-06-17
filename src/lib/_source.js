let tokenKey = '5ipVLB12JskMNdVc7nUTzgBc2KSa6hRUnoWAVoUkWsKq';

export const getAppSvxCode = ({ token }) => {
	tokenKey = token;
	return code_1;
};
export const code_0 = `---
author: Doug Anderson (@douganderson444)

---

<script>
  import { editable } from  '@douganderson444/svelte-editable-action@latest'
	import List from '@douganderson444/listavelte@0.1.6'
	import Changable from './Changable.svelte'
	
	export let name = 'Douglas';
	export let lastName = 'Anders'
	
	export let editableTitle = 'Click to edit My first Template'
	export let fancyEditText = 'Click me to fancy edit, watch me update'
	
	const makeProp = varObj => ({ key: Object.keys(varObj)[0], value: varObj[Object.keys(varObj)[0]]})

</script>

<h1>
<Changable prop={makeProp({editableTitle})} on:change={e=>console.log(e.detail)}></Changable> {name} {lastName}
</h1>

<div use:editable on:change={(e) => fancyEditText = e.detail } >
	<h2>{fancyEditText}</h2>
</div>

### Markdown Syntax works

#### Let's import a TODO Component:

<!-- use on:change to pass the properies up to the parent component -->
<List on:change></List>

_Written by:_

{author}

<style>
	:root {
		background-color: #fafafa;	
	}

	
	h2 {
		color: blue
	}
		
	h4 {
		color: green
	}
	h1 {
		color: red;
		font-family: 'Luckiest Guy', sans-serif;
		text-transform: uppercase;
	}

	@font-face {
		font-family: 'Luckiest Guy';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/luckiestguy/v17/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
</style>
`;

export const code_1 = `<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	// pass in the item you want to monitor changes on
	export let prop = { 
		key: 'editableTitle', 
		value: 'Some content to change' 
	}
	// dispatch the change event when the content is edited
	$: if (prop.value) dispatch('change', { [prop.key]: prop.value });

</script>

<span contenteditable bind:textContent={prop.value}></span>
`;

export const code_2 = `<script>
  import { onMount } from "svelte"

  export let endpoint = "devnet"
  export let account
  export let tokenKey

	let hasAccess = false
  let ready
  let connection
  let attempts = 0
  onMount(async () => {
    setTimeout(fireWhenReady, 100)
  })

  // wait for solanaWeb3 to have loaded
  const fireWhenReady = () => {
    if (typeof solanaWeb3 != "undefined") {
      ready = true
      // console.log({ solanaWeb3 })
      init()
    } else {
      // console.log("else, try again soon")
      setTimeout(fireWhenReady, 500)
    }
  }

  function init() {
    const ENDPOINTS = [
      {
        name: "mainnet-beta",
        endpoint: "https://solana-api.projectserum.com/",
      },
      {
        name: "testnet",
        endpoint: solanaWeb3.clusterApiUrl("testnet"),
      },
      {
        name: "devnet",
        endpoint: solanaWeb3.clusterApiUrl("devnet"),
      },
      {
        name: "localnet",
        endpoint: "http://127.0.0.1:8899",
      },
    ]
    const chain = ENDPOINTS.find((end) => end.name === endpoint) || ENDPOINTS[0]

    connection = new solanaWeb3.Connection(chain.endpoint, "singleGossip")
  }

  // $: if (ready) console.log({ solanaWeb3 }); // because we imported it in svelte:head

  const checkHasAccess = async () => {
		let params = new URLSearchParams(document.location.search);
		account = document.location.origin === "null" ? account : params.get("account"); 
	 	console.log("checking acccount", {account})
    try {
      let tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        new solanaWeb3.PublicKey(account),
        {
          mint: new solanaWeb3.PublicKey(tokenKey),
        }
      )
      if (tokenAccounts.value.length > 0) {
        tokenAccounts.value.forEach((account) => {
          if (account.account.data.parsed.info.tokenAmount.uiAmount > 0) {
            hasAccess = true
          } else {
            // setClaimTokenAccount(account.account.pubkey)
          }
        })
      }
    } catch (e) {
      console.log("error: ", e)
      return
    }
  }

  $: if (connection) checkHasAccess()
</script>

<svelte:head>
  <script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js">
  </script>
</svelte:head>


{#if connection}
<h1>Connected to Solana {endpoint}</h1>
{/if}
Requires this Solana token to have access: <br />
{tokenKey}
<br />
{#if hasAccess}
  <slot />
{:else}
  Sorry, you don't hold the access token in your Solana account. 
{/if}

<style>
  h1 {
    color: #815ad0;
  }
</style>
`;
export const code_3 = `<script>
  export let title;
  export let author;
  export let date;
</script>
 
<style>
  h1 {
    color: #102081;
  }
	
	section {
		background-color: beige;
		padding: 1rem;
	}
</style>

<section>


  <h1>{ title }</h1>

  <slot />

  <p class="date">on: { date }</p>
  <p class="date">by: { author }</p>

</section>

`;

export const code_4 = `
<div class="container">
  <div class="autograph">
    Here is my autograph 🚗 📈
  </div>
</div>

<style>
  .container {
      display: flex;
      justify-content: center;
  }

  .autograph {
      font-family: "Brush Script MT";
      font-size: 1.75rem;
      background-color: #f7f7f7;
      padding: 1rem;
      border-radius: 1rem;
      margin: 0 auto;
  }
</style>
`;
