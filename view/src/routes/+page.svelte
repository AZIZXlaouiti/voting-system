<div class="Header">
  <div class="Header-item ">
    <!-- <a href="#" class="Header-link">Releases</a> -->
    <button class="btn" type="button" aria-label="People icon">
      <svg  class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" 
      width="16" height="16">
      <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
    </svg>
    <span>Available polls</span> 
  </button>
  
  <button class="btn  ml-2" type="button" aria-label="Pencil icon">
    <!-- <%= octicon "pencil" %> -->
    <svg class="octicon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
    <span>Create new poll</span>  
  </button>
</div>
<span class="">What game should i play next ?</span> 
</div>  
<span class="Progress">
  <span class="Progress-item color-bg-success-emphasis  color-border-default" style="width: 20%;"></span>
</span>
    <section>
      <form>
        
        <div class="TimelineItem">
          <div class="TimelineItem-badge color-bg-success-emphasis color-fg-on-emphasis">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
            </svg>
          </div>
          <div class="radio-group">
            <input class="radio-input" id="option-a" type="radio" name="options" disabled>
            <label class="radio-label" for="option-a">Option A</label>
          </div>
        </div>
        <div  class="TimelineItem">
          <div class="TimelineItem-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon octicon-x">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
            </svg>
          </div>
          
          <div class="radio-group">
            <input on:click={handleSelection} on:keydown={()=>''} class="radio-input" id="option-b" type="radio" name="options">
            <label class="radio-label" for="option-b">Option B</label>
          </div>
        </div>
        <div class="TimelineItem">
          <div class="TimelineItem-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon octicon-x">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
            </svg>
          </div>
          
          <div class="radio-group" >
            <input class="radio-input" id="option-c" type="radio" name="options">
            <label class="radio-label " for="option-c">Option C</label>
          </div>
          
          
        </div>
        <div class="BtnGroup d-block mb-2 ml-0 mt-2 ">
          <button class="BtnGroup-item btn btn-danger btn-outline" type="button">Vote</button>
          
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
        background-color: #5684af82
      }
</style>
<script>
  let votes = [ false, false, false ]
  function handleSelection(index) {
    console.log('option clicked')
    votes.map((val , i)=>{
      if (i == index){
        val = true
      }
      console.log(`e : ${val} / index : ${i}`)
    })
  }
</script>