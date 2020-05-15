import React from 'react';

interface SubmitProps {
  label: string;
}

const Submit = ({ label }: SubmitProps) => <input type="submit" value={label} />;

export default Submit;
