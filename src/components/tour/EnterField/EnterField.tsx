import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../tourstyles/_resets.module.css';
import classes from './EnterField.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    yourFullNameRequired?: ReactNode;
  };
}

export const EnterField: FC<Props> = memo(function EnterField(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.yourFullNameRequired != null ? (
        props.text?.yourFullNameRequired
      ) : (
        <div className={classes.yourFullNameRequired}>Your full name (required)</div>
      )}
    </div>
  );
});
