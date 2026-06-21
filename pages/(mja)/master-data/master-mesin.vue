<script setup lang="ts">
import ListData from '~/components/master-mesin/ListData.vue'
import ListDataDetail from '~/components/master-mesin/ListDataDetail.vue'
</script>
<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Data Mesin</CardTitle>
    </CardHeader>

    <CardContent>
      <Tabs default-value="mesin" class="w-full">
        <TabsList>
          <TabsTrigger value="mesin"> Data Mesin </TabsTrigger>

          <TabsTrigger value="detail"> Detail Mesin </TabsTrigger>
        </TabsList>

        <TabsContent value="mesin">
          <ListData />
        </TabsContent>

        <TabsContent value="detail">
          <ListDataDetail />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>

<style lang=""></style>
