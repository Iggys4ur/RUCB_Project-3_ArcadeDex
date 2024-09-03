  # Get the list of remote branches
  $remoteBranches = git branch -r | ForEach-Object { $_.Trim() -replace 'origin/', '' }
 
  # Filter out 'HEAD -> main' from the remote branches
  $remoteBranches = $remoteBranches | Where-Object { $_ -ne 'HEAD -> main' }

  # Get the list of local branches
  $localBranches = git branch | ForEach-Object { $_.Trim() -replace '\* ', '' }
 
  # Identify remote branches not existing locally
  $remoteOnlyBranches = $remoteBranches | Where-Object { $_ -notin $localBranches }
  Write-Output "Remote branches not existing locally: $remoteOnlyBranches `n`n"
 
  # Identify local branches not existing remotely
  $localOnlyBranches = $localBranches | Where-Object { $_ -notin $remoteBranches }
  Write-Output "Local branches not existing remotely: $localOnlyBranches `n`n"
 
  # Pull remote-only branches to local repository
  foreach ($branch in $remoteOnlyBranches) {
      git checkout -b $branch origin/$branch
          Write-Output "*****`nPulled remote branch: $branch `n"
          }
 
  # Push local-only branches to GitHub
  foreach ($branch in $localOnlyBranches) {
      git push origin $branch
          Write-Output "*****`nPushed local branch: $branch"
          }
