import NotesList from '@/app/components/notes-lits'
import TimerCounter from '@/app/components/timer-counter'
import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import RefreshButton from '@/app/components/refresh-button'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        Hello Next.js 13
        <p className="text-center text-2xl font-thin text-gray-900">
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむねもやゆよらりるれろわをん
        </p>
        <p className="text-center text-2xl font-normal text-gray-900">
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむねもやゆよらりるれろわをん
        </p>
        <p className="text-center text-2xl font-bold text-gray-900">
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむねもやゆよらりるれろわをん
        </p>
        <p className="text-center text-2xl font-extrabold text-gray-900">
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむねもやゆよらりるれろわをん
        </p>
        <p className="text-center text-2xl font-thin text-gray-900">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-center text-2xl font-normal text-gray-900">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-center text-2xl font-bold text-gray-900">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-center text-2xl font-extrabold text-gray-900">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-center text-2xl font-thin text-gray-900">
          1234567890
        </p>
        <p className="text-center text-2xl font-normal text-gray-900">
          1234567890
        </p>
        <p className="text-center text-2xl font-bold text-gray-900">
          1234567890
        </p>
        <p className="text-center text-2xl font-extrabold text-gray-900">
          1234567890
        </p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshButton />
      </div>
    </main>
  )
}
