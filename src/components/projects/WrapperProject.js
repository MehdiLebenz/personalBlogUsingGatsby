import styled from 'styled-components';

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway');


// Mobile first
*,
*::before,
*::after { 
  box-sizing: border-box;
}

html {
  background-color: #f8f8f8;
}

body {
  padding: 2rem 0.5rem;
  font-family: 'Raleway',Sans-serif;
  color: #32325d;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  margin: 0;
  @media(min-width: 40rem) {
    padding: 2rem;
  }
}

//Flex container
.container {
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

// Cards
.cards {
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3%;
  }

  .card-item {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    overflow: hidden;
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      .card-image {
        opacity: 1;
      }
    }
  }

  // Content
  .card-info {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
    line-height: 1.5em;
  }

  .card-title {
    font-size: 25px;
    line-height: 1.1em;
    color: #32325d;
    margin-bottom: 0.2em;
  }

  // Images
  .card-image{
    height: 200px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px 6px 0px 0px;
    opacity: 0.91;
  }
}


`
export default Wrapper;