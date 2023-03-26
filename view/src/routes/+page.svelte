<script>
  import Selector from "./Selector.svelte";
  // displaying selector
  let votes = [false, false, false, false];
  
</script>

<div class="Header">
  <div class="Header-item ">
    <!-- <a href="#" class="Header-link">Releases</a> -->
    <button class="btn" type="button" aria-label="People icon">
      <svg
        class="octicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
        />
      </svg>
      <span>Available polls</span>
    </button>

    <button class="btn  ml-2" type="button" aria-label="Pencil icon">
      <!-- <%= octicon "pencil" %> -->
      <svg
        class="octicon "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        ><path
          fill-rule="evenodd"
          d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
        /></svg
      >
      <span>Create new poll</span>
    </button>
  </div>
  <span class="">What game should i play next ?</span>
</div>
<span class="Progress">
  <span
    class="Progress-item color-bg-success-emphasis  color-border-default"
    style="width: 20%;"
  />
</span>
<section>
  <form>
    {#each votes as vote , index}
      <Selector name = {index} cell = {''} />
    {/each}

    <div class="BtnGroup d-block mb-2 ml-0 mt-2 ">
      <button class="BtnGroup-item btn btn-danger btn-outline" type="button"
        >Vote</button
      >
    </div>
  </form>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
  .btn-primary {
    color: #000000;
    background-color: #b8fe4e;
  }
  .Progress {
    border-radius: 0;

    /* background-color: #75bcff  */
  }
  .color-bg-success-emphasis {
    background-color: #5524ff;
  }
  
</style>
