"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";


const page = () => {
  const [value, setValue] = useState("")
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: ()=>{
      toast.add({
        title: "Success",
        description: "Background job started successfully.",
        type: "success",
      });
    }
  }))
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Button disabled={invoke.isPending} onClick={()=> invoke.mutate({value})}>
        Invoke Background Job
      </Button>
    </div>
  )
}

export default page