import logo from './logo.svg';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { HomePage } from './components/Home.page';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1,3]}></DynamicParallelPage>}></Route>
          <Route path='/rq-parallel' element={<ParallelQueriesPage></ParallelQueriesPage>}></Route>
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage></RQSuperHeroPage>}></Route>
            <Route path='/super-heroes' element={<SuperHeroesPage />}>

            </Route>
            {/* <Route path='/rq-super-heroes/:heroId'>
            <RQSuperHeroPage />
          </Route> */}
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}>

            </Route>
            {/* <Route path='/rq-parallel'>
            <ParallelQueriesPage />
          </Route>
          <Route path='/rq-dynamic-parallel'>
            <DynamicParallelPage heroIds={[1, 3]} />
          </Route>
          <Route path='/rq-dependent'>
            <DependentQueriesPage email='vishwas@example.com' />
          </Route>
          <Route path='/rq-paginated'>
            <PaginatedQueriesPage />
          </Route>
          <Route path='/rq-infinite'>
            <InfiniteQueriesPage />
          </Route> */}
            <Route path='/' element={<HomePage></HomePage>}>
            </Route>
          </Routes>
        </div>
      </Router>
      
    </QueryClientProvider>
  );
}

export default App;
