<script lang="ts" setup>
definePageMeta({ auth: false })

</script>

<template>
  <div class="flex min-h-screen h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create new account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-3" action="#" method="POST">
        <UFormGroup label="Name" name="name">
          <UInput icon="i-heroicons-user" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput type="email" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput type="password" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <UButton type="submit" block label="Register" />
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Have An account ?
        {{ ' ' }}
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
