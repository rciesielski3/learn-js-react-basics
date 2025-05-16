export const serverActionsExamples = [
  {
    id: 'basic-action',
    name: 'Basic Server Action',
    description:
      'A server action is an async function exported with the `use server` directive and used in form actions.',
    code: `"use server";

export async function submitName(formData) {
  const name = formData.get("name");
  await saveNameToDB(name);
}`,
    usage: 'Used directly in a `<form action={submitName}>`',
    result: 'Runs on server automatically'
  },
  {
    id: 'form-action',
    name: 'Form Using Server Action',
    description: 'You can submit a form directly to a server function — no client JS needed.',
    code: `import { submitName } from "./actions";

export default function Form() {
  return (
    <form action={submitName}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    usage: 'Runs server action on submit without fetch or JS',
    result: 'Zero client-side JS'
  },
  {
    id: 'use-form-state',
    name: 'useFormState Example',
    description:
      'Manage form state after submission with `useFormState` to update UI without full refresh.',
    code: `const [state, formAction] = useFormState(submitName, null);

<form action={formAction}>
  <input name="name" />
  <button type="submit">Submit</button>
</form>

<p>Last submitted: {state}</p>`,
    usage: 'Returns value from server to UI',
    result: 'Seamless state update'
  },
  {
    id: 'mutation-no-api',
    name: 'Mutate Without API Route',
    description:
      'Server Actions eliminate the need for fetch or API routes — direct DB calls are possible.',
    code: `export async function deletePost(id) {
  "use server";
  await db.post.delete({ where: { id } });
}`,
    usage: 'Call inside form or on server-side trigger',
    result: 'No REST API needed'
  },
  {
    id: 'secure-action',
    name: 'Secure by Default',
    description:
      'Server actions run only on the server, never exposed to client JS. Safe for DB access, validation, etc.',
    code: `"use server";

export async function updateUser(formData) {
  // Secure logic here
}`,
    usage: 'Only runs on server — no exposure',
    result: 'Safe for secrets and mutations'
  }
];
