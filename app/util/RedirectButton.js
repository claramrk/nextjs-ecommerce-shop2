'use client';
import { redirect } from 'next/navigation';

export function RedirectButton(props) {
  console.log(props);
  return (
    <form>
      <button
        className="primarybutton"
        formAction={async () => {
          return await redirect(props.redirectPage);
        }}
      >
        {props.buttonText}
      </button>
    </form>
  );
}
