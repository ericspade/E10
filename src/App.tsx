import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _continent } from './pages/continent/continent';
import { _country } from './pages/country/country';
import { _city } from './pages/city/city';
import { _tour } from './pages/tour/tour';
import { _countryAUSTRALIA } from './pages/countryAUSTRALIA/countryAUSTRALIA';
import { _cityHAMILTONISLAND } from './pages/cityHAMILTONISLAND/cityHAMILTONISLAND';
import { _continentEUROPE } from './pages/continentEUROPE/continentEUROPE';
import { _continentANTARCTICA } from './pages/continentANTARCTICA/continentANTARCTICA';
import { _tourANTARCTICA1 } from './pages/tourANTARCTICA1/tourANTARCTICA1';
/* import { _hotelSHAWELLNESS } from './components/hotelSHAWELLNESS/hotelSHAWELLNESS';
import { _hotelFORTEVILLAGE } from './components/hotelFORTEVILLAGE/hotelFORTEVILLAGE';
import { _hotelGSTAAD } from './components/hotelGSTAAD/hotelGSTAAD';
import { _hotelKULM } from './components/hotelKULM/hotelKULM';
import { _hotelSINGITA } from './components/hotelSINGITA/hotelSINGITA';
import { _hotelROHOYA } from './components/hotelROHOYA/hotelROHOYA';
import { _hotelPASALACQUA } from './components/hotelPASALACQUA/hotelPASALACQUA';
import { _hotelILSERENO } from './components/hotelILSERENO/hotelILSERENO';
import { _hotelBETULUM } from './components/hotelBETULUM/hotelBETULUM';
import { _hotelENCANTADA } from './components/hotelENCANTADA/hotelENCANTADA';
import { _hotelROSEWOOD } from './components/hotelROSEWOOD/hotelROSEWOOD';
import { _hotelUPPERHOUSE } from './components/hotelUPPERHOUSE/hotelUPPERHOUSE';
import { _hotelATLANTIS } from './components/hotelATLANTIS/hotelATLANTIS'; */
/* import { _city } from './components/city/city';
import { _tour } from './components/tour/tour';
import { _event } from './components/event/event';
import { _hotel } from './components/hotel/hotel'; */
/* import { _2 } from './components/_2/_2';
import { _japangoldenring } from './components/japangoldenring/japangoldenring'; */
import resets from './components/_resets.module.css';
import "./fonts/Manrope-Regular.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main/Main';
import DestinationsPage from './pages/destinations/DestinationsPage';
import RentPage from './pages/rent/RentPage';
import TypesOfRest from './pages/typesMain/TypesOfRest';
import TypesCard from './pages/typesCard/TypesCard';
import Meet from './pages/meet/Meet';
import Hotel from './pages/hotel/Hotel';
import Policy from './pages/policy/Policy';
import Policy2 from './pages/policy2/Policy2';
import Publicoffer from './pages/publicoffer/Publicoffer';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.styleResets} ${classes.root}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}>
          </Route>
          <Route path="/policy" element={<Policy title="Personal Data Processing Policy" />}>
          </Route>
          <Route path="/policy2" element={<Policy2 title="Consent to the Processing of Personal Data" />}>
          </Route>
          <Route path="/publicoffer" element={<Publicoffer title="Public Offer" />}>
          </Route>
          <Route path="/destinations" element={<DestinationsPage></DestinationsPage>}>
          </Route>
          <Route path="/rent" element={<RentPage></RentPage>}>
          </Route>
          <Route path="/types" element={<TypesOfRest></TypesOfRest>}>
          </Route>
          <Route path="/types:extreme" element={<TypesCard></TypesCard>}>
          </Route>
          <Route path="/meet" element={<Meet></Meet>}>
          </Route>
          <Route path="/hotel" element={<Hotel></Hotel>}>
          </Route>

          <Route path="/continent" element={<_continent />}>
          </Route>
          <Route path="/country" element={<_country />}>
          </Route>
          <Route path="/city" element={<_city />}>
          </Route>
          <Route path="/tour" element={<_tour />}>
          </Route>
          <Route path="/australia" element={<_countryAUSTRALIA />}>
          </Route>
          <Route path="/hamiltonisland" element={<_cityHAMILTONISLAND />}>
          </Route>
          <Route path="/europe" element={<_continentEUROPE />}>
          </Route>
          <Route path="/antarctica" element={<_continentANTARCTICA />}>
          </Route>
          <Route path="/antarcticatour1" element={<_tourANTARCTICA1 />}>
          </Route>
          {/* <Route path="/hotelSHAWELLNESS" element={<_hotelSHAWELLNESS />}>
        </Route>
        <Route path="/hotelFORTEVILLAGE" element={<_hotelFORTEVILLAGE />}>
        </Route>
        <Route path="/hotelGSTAAD" element={<_hotelGSTAAD />}>
        </Route>
        <Route path="/hotelKULM" element={<_hotelKULM />}>
        </Route>
        <Route path="/hotelSINGITA" element={<_hotelSINGITA />}>
        </Route>
        <Route path="/hotelROHOYA" element={<_hotelROHOYA />}>
        </Route>
        <Route path="/hotelPASALACQUA" element={<_hotelPASALACQUA />}>
        </Route>
        <Route path="/hotelILSERENO" element={<_hotelILSERENO />}>
        </Route>
        <Route path="/hotelBETULUM" element={<_hotelBETULUM />}>
        </Route>
        <Route path="/hotelENCANTADA" element={<_hotelENCANTADA />}>
        </Route>
        <Route path="/hotelROSEWOOD" element={<_hotelROSEWOOD />}>
        </Route>
        <Route path="/hotelUPPERHOUSE" element={<_hotelUPPERHOUSE />}>
        </Route>
        <Route path="/hotelATLANTIS" element={<_hotelATLANTIS />}>
        </Route> */}
          {/* <Route path="/city" element={<_city />}>
        </Route>
        <Route path="/event" element={<_event />}>
        </Route>
        <Route path="/hotel" element={<_hotel />}>
        </Route>
        <Route path="/tour" element={<_tour />}>
        </Route> */}
          {/*  <Route path="/japangoldenring" element={<_japangoldenring />}>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
});
