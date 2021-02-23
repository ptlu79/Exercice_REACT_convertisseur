// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import CustomButton from 'src/components/CustomButton';

// import du fichier de données
import currenciesList from 'src/data/currencies';

import './styles.scss';

// == Composant
class App extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    baseAmountSubmitted: 1,
    currency: 'United States Dollar',
    inputSearch: '',
  };

  // appelé après le premier rendu
  componentDidMount() {
    // ******************* aller interroger une API ?!
    this.updateTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      // met à jour le titre seulement si la devise a changé
      this.updateTitle();
    }
  }

  updateTitle = () => {
    document.title = `Converter - ${this.state.currency}`;
  }

  handleClick = (newValue) => {
    this.setState({
      open: newValue,
    });
  }

  setCurrency = (currency) => {
    this.setState({
      currency,
    });
  }

  setSearch = (newValue) => {
    this.setState({
      inputSearch: newValue,
    });
  }

  setBaseAmount = (newBaseAmount) => {
    this.setState({
      baseAmount: newBaseAmount,
    });
  }

  handleSubmit = () => {
    this.setState({
      baseAmountSubmitted: this.state.baseAmount,
    });
  }

  getFilteredCurrencies = () => {
    const { inputSearch } = this.state;

    let filteredCurrencies = currenciesList;

    // si pas vide, on filtre
    // trim : enlever les espaces au début et à la fin
    if (inputSearch.trim().length > 0) {
      filteredCurrencies = currenciesList.filter((currency) => {
        // chaîne à rechercher : toute en minuscules
        const loweredSearch = inputSearch.toLowerCase();
        const loweredCurrency = currency.name.toLowerCase();
        return loweredCurrency.includes(loweredSearch);
      });
    }

    return filteredCurrencies;
  }


  computeAmount = () => {
    const { baseAmountSubmitted: baseAmount, currency } = this.state;

    const currencyData = currenciesList.find((data) => data.name === currency);

    const result = baseAmount * currencyData.rate;

    const roundedResult = result.toFixed(2); // arrondi 0.00

    return roundedResult;
  }

  render() {
    const {
      open,
      baseAmount,
      currency,
      inputSearch,
    } = this.state;

    const result = this.computeAmount();

    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          setBaseAmount={this.setBaseAmount}
          handleSubmit={this.handleSubmit}
        />
        <CustomButton open={open} manageClick={this.handleClick} />
        {open && (
          <Currencies
            currencies={filteredCurrencies}
            handleClick={this.setCurrency}
            search={inputSearch}
            handleSearchChange={this.setSearch}
          />
        )}
        <Amount currency={currency} amount={result} />
      </div>
    );
  }
}

// == Export
export default App;
