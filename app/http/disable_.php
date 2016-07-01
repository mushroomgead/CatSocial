<div class="image" oncontextmenu="return false">
  <img src="cat.jpg">
</div>

<script language="javascript">
document.onmousedown=disableclick;
function disableclick(event)
{
  if(event.button==2)
   {
     return false;
   }
}
</script>
