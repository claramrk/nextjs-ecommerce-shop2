'use client';
import { redirect } from 'next/navigation';

export function RedirectButton(props) {
  return (
    <form>
      <button
        className="primarybutton"
        data-test-id={props.datatestid}
        formAction={async () => {
          return await redirect(props.redirectPage);
        }}
      >
        {props.buttonText}
      </button>
    </form>
  );
}
