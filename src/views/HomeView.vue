<template>
  <div class="home">
    <NavBar />

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
      <section class="data-Prohibited">
        <h1>Entradas</h1>
        <div class="container-card">
          <div v-for="(item, index) in tarefas" :key="index" class="card">
            <div class="card-body">
              <input type="checkbox" v-model="item.selected" class="check-input">
              <div class="content-card">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <div class="date-input">
                  <span class="date-icon">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24" 
                    viewBox="0 -960 960 960" 
                    width="24">
                    <path 
                    d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
                    </svg>
                  </span>
                  <input type="date" class="date-field">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data() {
    return {
      itens: [
        { titulo: 'Item 1', descricao: 'Descrição do Item 1 ssadasdsadasdasdasdasdasdsdasdasdadasdasddadsadasdasdasdasdasdasdasdasdsadasdasd' },
        { titulo: 'Item 2', descricao: 'Descrição do Item 2' },
        { titulo: 'Item 3', descricao: 'Descrição do Item 3' }
      ],
      tarefas:[],
    };
  },

  created() {
     this.getTasks();
  },

  methods: {
    truncarDescricao(descricao) {
      const comprimentoMaximo = 95; // Defina o comprimento máximo desejado
      if (descricao.length > comprimentoMaximo) {
        return descricao.substring(0, comprimentoMaximo) + '...';
      } else {
        return descricao;
      }
    },
    getTasks() {
     this.$axios.get('tarefas')
      .then((response) => {
        this.tarefas = response.data.data
        console.log(this.tarefas);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}


</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  height: 98vh;
  background-color: #ffffff;

}

.container-card {
  width: 1200px;
  height: 600px; /* Altura máxima da div */
  overflow-y: auto; /* Adiciona scroll vertical quando necessário */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no Chrome, Safari, etc */
  }
}

.date-input {
  position: relative;
  display: inline-block;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.date-icon {
  position: absolute;
  left: 5px; /* Ajuste a posição horizontal do ícone */
  transform: translateY(-50%);
  z-index: 999;
  top: -4px;
  width: 24px; /* Ajuste a largura do ícone */
  height: 24px; /* Ajuste a altura do ícone */
  pointer-events: none; /* Garante que o ícone não seja clicável */
}

.date-field {
  padding-left: 30px; /* Deixa espaço para o ícone */
  height: 30px;

}

.check-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #E5E5E5;
  outline: none;
  cursor: pointer;
  position: relative;
  top: -27px !important;
}

.check-input:checked::before {
  content: '✔';
  color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  width: 99%;
  height: 99%;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
}


.data-Prohibited {
  flex: 1;
  height: 80vh;
  padding-left: 250px;
  padding-top: 110px;

  h1 {
    font-size: 35px !important;
  }

}

.content-card {
  position: relative;
  left: 30px;
}



.card-body {
  width: 80%;
  height: 130px;
  border: 2px solid #E5E5E5;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 20px;

  h5 {
    font-size: 18px;

  }

  p {
    font-size: 16px;
    font-weight: 200;
    position: relative;
    top: -20px;
  }

  input {
    position: relative;
    top: -20px;
  }
}

.data-general {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-left {
  width: 300px;
  height: 90vh;
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
  padding-left: 30px;
  position: relative;
  top: 50px;
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