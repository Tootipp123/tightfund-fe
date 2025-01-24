"use client"

import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function TeamCompTemp() {
  const router = useRouter()

  useEffect(() => {
    router.push("/team-compositions")
  }, []);
  return <></>
}