"use client"

import { useMutation } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";


const page = () => {
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
      <Button disabled={invoke.isPending} onClick={()=> invoke.mutate({text: "Test"})}>
        Invoke Background Job
      </Button>
    </div>
  )
}

export default page