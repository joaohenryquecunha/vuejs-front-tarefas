<template>
  <div class="home">
    <nav class="navbar">
      <div class="emotion">🤘</div>
      <div class="add-task">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" class="icon-navbar">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" class="icon-navbar">
          <path
            d="M480-220q25 0 42.5-17.5T540-280H420q0 25 17.5 42.5T480-220ZM280-320h400v-80h-40v-104q0-61-31.5-111.5T520-680v-20q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700v20q-57 14-88.5 64.5T320-504v104h-40v80Zm120-80v-120q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520v120H400Zm80 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" class="icon-navbar" width="40">
          <path
            d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>

      </div>
    </nav>

    <div class="data-general">
      <section class="menu-left">
        <div class="container">
          <div class="icon-menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
            </svg>
            <p>Entrada</p>
          </div>
        </div>
        <div class="container">
          <div class="icon-menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
              <path
                d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
            </svg>
            <p>Tarefas de hoje</p>
          </div>
        </div>
        <div class="container">
          <div class="icon-menu">
            <svg x mlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
              <path
                d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
            </svg>
            <p>Vencidos</p>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
}

.navbar {
  width: 100%;
  height: 70px;
  background: #000000;
  border: 2px solid #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.emotion {
  font-size: 30px;
  padding-left: 10px;
}

.add-task {
  display: flex;
  font-size: 50px;
  color: #ffffff;
  gap: 40px;
  padding-right: 10px;
}

.icon-navbar {
  fill: #ffffff;
}

.menu-left {
  width: 300px;
  height: 100vh;
  background: #FAFAFA;
}

.icon-menu-left {
  display: grid;
  gap: 10px;
}

.container {
  width: 250px;
  display: flex;
  justify-content: start;
  align-items: center;

  .icon-menu {
    position: relative;
    top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>