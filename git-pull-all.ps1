# git-pull-all.ps1

# Get the list of branches
$branches = git branch

# Iterate over each branch and perform checkout and pull
foreach ($branch in $branches) {
    # Trim any whitespace and '*' characters that might be present
    $branch = $branch.Trim().TrimStart('*').Trim()

    Write-Output "Switching to branch: $branch"
    git checkout $branch

    Write-Output "Pulling latest changes for branch: $branch"
    git pull origin $branch
}