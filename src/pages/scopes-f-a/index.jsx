import React from 'react';
import image from '../../assets/alcances/slider scopes/scopes slider static.png';
import { ScopesSliderStatic } from '../../components/ScopesSliderStatic';
import { ScopesBodyDescription } from '../../components/ScopesBodyDescription';
import { ScopesFASpecificBody } from '../../components/ScopesFASpecificBody';

const ScopesFA = ( { showModal } ) => {
  return (
    <div className="scopes-f-a-body w-100">
      <ScopesSliderStatic
        imageSrc={image}
        title="ENFOQUE FUNCIONAL"
        description=""
      />
      <ScopesBodyDescription />
      <ScopesFASpecificBody showModal={showModal}/>
    </div>
  );
};

export { ScopesFA };