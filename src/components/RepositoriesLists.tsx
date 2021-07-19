import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedselector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { serarchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    serarchRepositories(term);
  };
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading.....</h3>}
      {!error && !loading && data.map((name, i) => <h3 key={i + 1}>{name}</h3>)}
    </div>
  );
};

export default RepositoriesList;
