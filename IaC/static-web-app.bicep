targetScope = 'resourceGroup'
param location string = 'westeurope'
param createdTime string = utcNow()
@description('Static Web App name (must be globally unique).')
param name string = 'swa-sw-landing-page'

@allowed([
  'Free'
  'Standard'
])
@description('Pricing plan.')
param skuName string = 'Standard'

@description('Optional tags.')
param tags object = {Created: createdTime}

resource swa 'Microsoft.Web/staticSites@2025-03-01' = {
  name: name
  location: location
  sku: {
    name: skuName
    tier: skuName
  }
  tags: tags
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
